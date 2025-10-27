import { Euro, Percent } from "lucide-react";
import CalculatorIcon from "../assets/icon-calculator.svg";
import { Button } from "./ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "./ui/field";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import type { FormType } from "./MortgageForm";

function maxInput(e: React.FormEvent<HTMLInputElement>) {
  const input = e.target as HTMLInputElement;
  if (input.value.length > 20) {
    input.value = input.value.slice(0, 20);
  }
}

export default function FieldSection({
  control,
  errors,
}: {
  control: Control<FormType>;
  errors: FieldErrors<FormType>;
}) {
  const [buttonScale, setButtonScale] = useState("scale-100");

  return (
    <FieldGroup className="gap-6.5 md:gap-5">
      {/* ===== Mortgage Amount ===== */}
      <Field className="md:gap-1">
        <FieldLabel
          htmlFor="amount"
          className="text-[1.0624rem] font-medium text-slate-700 md:text-[.75rem]"
        >
          Mortgage Amount
        </FieldLabel>

        <div className="relative">
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                aria-invalid={errors.amount ? "true" : "false"}
                id="amount"
                type="number"
                onInput={maxInput}
                onChange={field.onChange}
                className={cn(
                  "border-1 h-12.5 pl-15 rounded-[0.3125rem] font-bold md:h-9 md:rounded-[.3125rem] md:pl-12 transition-colors focus-visible:ring-0 peer",
                  errors.amount
                    ? "border-red focus-visible:border-red"
                    : "border-slate-900 focus-visible:border-lime"
                )}
              />
            )}
          />

          <span
            className={cn(
              "absolute left-[0.042rem] top-[0.0417rem] flex h-[calc(100%_-_0.089rem)] w-[2.2rem] items-center justify-center rounded-l-[0.27rem] bg-slate-100 transition-colors md:h-[calc(100%_-_0.08rem)] md:rounded-l-[.265rem]",
              errors.amount
                ? "bg-red text-white"
                : "peer-focus-visible:bg-lime text-slate-900"
            )}
          >
            <Euro className="w-5 md:w-4" />
          </span>
        </div>

        {errors.amount && (
          <FieldError className="md:text-[.7rem]">
            {errors.amount.message}
          </FieldError>
        )}
      </Field>

      {/* ===== Term & Rate ===== */}
      <FieldSet className="md:flex md:flex-row md:gap-3">
        {/* Term */}
        <Field className="md:gap-1">
          <FieldLabel
            htmlFor="term"
            className="text-[1.0624rem] font-medium text-slate-700 md:text-[.75rem]"
          >
            Mortgage Term
          </FieldLabel>

          <div className="relative">
            <Controller
              name="term"
              control={control}
              render={({ field }) => (
                <Input
                  aria-invalid={errors.term ? "true" : "false"}
                  {...field}
                  id="term"
                  type="number"
                  className={cn(
                    "border-1 h-12.5 pl-5 pr-15 rounded-[0.3125rem] font-bold md:h-9 md:rounded-[.3125rem] md:pl-3 transition-colors focus-visible:ring-0 peer",
                    errors.term
                      ? "border-red focus-visible:border-red"
                      : "border-slate-900 focus-visible:border-lime"
                  )}
                />
              )}
            />

            <span
              className={cn(
                "absolute right-[.0313rem] top-[.0417rem] flex h-[calc(100%_-_0.09rem)] w-[3rem] items-center justify-center rounded-r-[0.3125rem] bg-slate-100 font-bold text-sm transition-colors md:h-[calc(100%_-_0.10rem)] md:rounded-r-[.25rem] md:text-[.75rem] md:right-[.0379rem]",
                errors.term
                  ? "bg-red text-white"
                  : "peer-focus-visible:bg-lime text-slate-900"
              )}
            >
              years
            </span>
          </div>

          {errors.term && (
            <FieldError className="md:text-[.7rem]">
              {errors.term.message}
            </FieldError>
          )}
        </Field>

        {/* Rate */}
        <Field className="md:gap-1">
          <FieldLabel
            htmlFor="rate"
            className="text-[1.0624rem] font-medium text-slate-700 md:text-[.75rem]"
          >
            Interest Rate
          </FieldLabel>

          <div className="relative">
            <Controller
              name="rate"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  aria-invalid={errors.rate ? "true" : "false"}
                  id="rate"
                  type="number"
                  onInput={maxInput}
                  className={cn(
                    "border-1 h-12.5 pl-5 pr-12 rounded-[0.3125rem] font-bold md:h-9 md:rounded-[.3125rem] md:pl-3 transition-colors focus-visible:ring-0 peer",
                    errors.rate
                      ? "border-red focus-visible:border-red"
                      : "border-slate-900 focus-visible:border-lime"
                  )}
                />
              )}
            />

            <span
              className={cn(
                "absolute right-[0.0417rem] top-[.0417rem] flex h-[calc(100%_-_0.09rem)] w-[2.4rem] items-center justify-center rounded-r-[0.3125rem] bg-slate-100 transition-colors",
                errors.rate
                  ? "bg-red text-white"
                  : "peer-focus-visible:bg-lime text-slate-900"
              )}
            >
              <Percent className="w-4" />
            </span>
          </div>

          {errors.rate && (
            <FieldError className="md:text-[.7rem]">
              {errors.rate.message}
            </FieldError>
          )}
        </Field>
      </FieldSet>

      {/* ===== Mortgage Type ===== */}
      <FieldSet className="md:gap-[.25rem_!important]">
        <FieldTitle className="text-[1.0624rem] font-medium text-slate-700 md:text-[.75rem]">
          Mortgage Type
        </FieldTitle>

        <Controller
          name="type"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup
              id="type"
              onValueChange={field.onChange}
              value={field.value}
              aria-invalid={errors.type ? "true" : "false"}
            >
              {/* Repayment */}
              <FieldLabel
                htmlFor="repayment"
                className={cn(
                  "border-5 rounded-[.3125rem_!important] transition-colors",
                  errors.type
                    ? "border-red"
                    : "border-slate-900 has-data-[state=checked]:border-lime"
                )}
              >
                <Field
                  orientation="horizontal"
                  className="md:py-[0.6rem_!important]"
                >
                  <RadioGroupItem
                    value="repayment"
                    id="repayment"
                    className="transition-colors"
                    aria-label="repayment"
                  />
                  <FieldContent>
                    <FieldTitle className="font-bold text-slate-900 md:text-[.75rem]">
                      Repayment
                    </FieldTitle>
                  </FieldContent>
                </Field>
              </FieldLabel>

              {/* Interest Only */}
              <FieldLabel
                htmlFor="interest-only"
                className={cn(
                  "border-5 rounded-[.3125rem_!important] transition-colors",
                  errors.type
                    ? "border-red"
                    : "border-slate-900 has-data-[state=checked]:border-lime"
                )}
              >
                <Field
                  orientation="horizontal"
                  className="md:py-[0.6rem_!important]"
                >
                  <RadioGroupItem
                    value="interest-only"
                    id="interest-only"
                    className="transition-colors"
                    aria-label="interest-only"
                  />
                  <FieldContent>
                    <FieldTitle className="font-bold text-slate-900 md:text-[.75rem]">
                      Interest Only
                    </FieldTitle>
                  </FieldContent>
                </Field>
              </FieldLabel>
            </RadioGroup>
          )}
        />

        {errors.type && (
          <FieldError className="md:text-[.7rem]">
            {errors.type.message}
          </FieldError>
        )}
      </FieldSet>

      {/* ===== Calculate Button ===== */}
      <Button
        aria-label="calc"
        onPointerDown={() => setButtonScale("scale-95")}
        onPointerUp={() => setButtonScale("scale-100")}
        onPointerEnter={() => setButtonScale("scale-100")}
        onPointerLeave={() => setButtonScale("scale-100")}
        className={cn(
          "bg-lime text-slate-900 rounded-full h-15.5 text-[1.1875rem] font-bold items-center md:h-8 md:w-fit md:text-[0.75rem] hover:bg-lime focus-visible:ring-slate-900 duration-100",
          buttonScale
        )}
      >
        <img src={CalculatorIcon} alt="" className="w-6 md:w-3" />
        Calculate Repayments
      </Button>
    </FieldGroup>
  );
}
