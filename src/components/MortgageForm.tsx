import { Button } from "./ui/button";
import Results from "./Results";
import FieldSection from "./FieldSection";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const FormSchema = z.object({
  amount: z
    .string()
    .trim()
    .min(1, { message: "This field is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Enter a valid number",
    }),
  term: z
    .string()
    .trim()
    .min(1, { message: "This field is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Enter a valid number",
    }),
  rate: z
    .string()
    .trim()
    .min(1, { message: "This field is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Enter a valid number",
    }),
  type: z.enum(["repayment", "interest-only", ""], {
    message: "This field is required",
  }),
});

export type FormType = z.infer<typeof FormSchema>;

export default function MortgageForm() {
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalRepay, setTotalRepay] = useState("");
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: "",
      term: "",
      rate: "",
      type: "",
    },
  });

  function calculateMortgage({ amount, term, rate, type }: FormType) {
    // Convert inputs safely
    const loanAmount = parseFloat(amount);
    const loanTerm = parseFloat(term);
    const interestRate = parseFloat(rate);

    // Validation guard
    if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(interestRate)) {
      setMonthlyPayment("0");
      setTotalRepay("0");
      return;
    }

    const monthlyRate = interestRate / 100 / 12; // annual → monthly
    const totalMonths = loanTerm * 12;

    let monthlyPayment = 0;
    let totalRepay = 0;

    if (type === "repayment") {
      // Repayment formula
      const numerator = monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
      const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;

      // prevent division by zero
      if (denominator === 0) {
        setMonthlyPayment("0");
        setTotalRepay("0");
        return;
      }

      monthlyPayment = loanAmount * (numerator / denominator);
      totalRepay = monthlyPayment * totalMonths;
    } else if (type === "interest-only") {
      // Interest-only formula
      monthlyPayment = loanAmount * monthlyRate;
      totalRepay = monthlyPayment * totalMonths;
    }

    setMonthlyPayment(monthlyPayment.toFixed(2) ?? "0");
    setTotalRepay(totalRepay.toFixed(2) ?? "0");
  }

  function onSubmitForm(data: FormType) {
    calculateMortgage(data);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        id="mortgageForm"
        className="flex flex-col gap-6 py-4  px-6.25  md:rounded-l-2xl  md:w-1/2 md:gap-4"
      >
        <section className="title md:flex justify-between items-center ">
          <h1 className="text-[1.652rem] md:text-[1.2rem]  font-bold">
            Mortgage Calculator
          </h1>
          <Button
            type="reset"
            onClick={() => reset({ type: "" })}
            variant="link"
            className="underline p-0 text-[1.0625rem] md:text-[.6875rem] font-medium text-slate-700 hover:text-slate-900"
          >
            Clear All
          </Button>
        </section>
        <FieldSection control={control} errors={errors} />
      </form>
      <Results month={monthlyPayment} total={totalRepay} />
    </>
  );
}
