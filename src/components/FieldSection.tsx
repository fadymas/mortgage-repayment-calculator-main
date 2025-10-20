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
import type React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
function maxInput(e: React.FormEvent<HTMLInputElement>) {
  const input = e.target as HTMLInputElement;
  if (input.value.length > 20) {
    input.value = input.value.slice(0, 20);
  }
}
export default function FieldSection() {
  const [buttonScale, setButtonScale] = useState("scale-100");
  return (
    <FieldGroup className="gap-6.5 md:gap-4">
      <Field>
        <FieldLabel
          htmlFor="amount"
          className="text-[1.0624rem] font-medium  text-slate-700 md:text-[.75rem]"
        >
          Mortgage Amount
        </FieldLabel>

        <div className="input-group relative  ">
          <Input
            type="number"
            id="amount"
            name="amount"
            onInput={maxInput}
            className="border-1 h-12.5 pl-15 border-slate-900 rounded-[0.3125rem]  font-bold md:h-9 md:rounded-[.3125rem] md:pl-12 focus-visible:border-lime focus-visible:ring-0 peer transition-colors"
          />
          <span className="absolute h-[calc(100%_-0.089rem)]   md:h-[calc(100%_-0.08rem)] top-[0.0417rem] md:left-[.04rem] rounded-l-[0.27rem] w-[2.2rem_!important] flex justify-center items-center bg-slate-100 peer-focus-visible:bg-lime transition-colors md:rounded-l-[.265rem] left-[0.0420rem]">
            <Euro className="w-5 md:w-4" />
          </span>
        </div>

        <FieldError></FieldError>
      </Field>
      <FieldSet className="md:flex  md:flex-row">
        <Field>
          <FieldLabel
            className="text-[1.0624rem] font-medium  text-slate-700 md:text-[.75rem]"
            htmlFor="term"
          >
            Martgage Term
          </FieldLabel>

          <div className="input-group relative">
            <Input
              type="number"
              id="term"
              name="term"
              onInput={maxInput}
              className="border-1 h-12.5 pl-5 pr-15 border-slate-900 rounded-[0.3125rem]  font-bold  md:h-9 md:rounded-[.3125rem] md:pl-3 peer focus-visible:border-lime focus-visible:ring-0 transition-colors"
            />
            <span className="absolute  h-[calc(100%_-0.09rem)] md:h-[calc(100%_-0.10rem)] top-[.0417rem] right-[.0313rem]  rounded-r-[0.3125rem] w-[3rem_!important] flex justify-center items-center bg-slate-100 font-bold text-sm md:text-[.75rem] peer-focus-visible:bg-lime md:rounded-r-[.25rem] transition-colors">
              years
            </span>
          </div>

          <FieldError></FieldError>
        </Field>
        <Field>
          <FieldLabel
            className="text-[1.0624rem] font-medium  text-slate-700 md:text-[.75rem]"
            htmlFor="rate"
          >
            Interest Rate
          </FieldLabel>

          <div className="input-group relative">
            <Input
              type="number"
              id="rate"
              name="rate"
              onInput={maxInput}
              className="border-1 h-12.5 pl-5 pr-12 border-slate-900 rounded-[0.3125rem]  font-bold  md:h-9 md:rounded-[.3125rem] md:pl-3 peer focus-visible:ring-0 focus-visible:border-lime transition-colors"
            />
            <span className="absolute  h-[calc(100%_-0.09rem)] top-[.0417rem] right-[0.0417rem] rounded-r-[0.3125rem] w-[2.4rem_!important] flex justify-center items-center bg-slate-100 peer-focus-visible:bg-lime transition-colors">
              <Percent className="w-4" />
            </span>
          </div>

          <FieldError></FieldError>
        </Field>
      </FieldSet>
      <FieldSet>
        <FieldTitle className="text-[1.0624rem] font-medium text-slate-700 md:text-[.75rem]">
          Mortgage Type
        </FieldTitle>
        <RadioGroup id="type" name="type" defaultValue="repayment">
          <FieldLabel
            htmlFor="repayment"
            className="border-slate-900 has-data-[state=checked]:border-lime border-5  rounded-[.3125rem_!important] transition-colors"
          >
            <Field
              orientation="horizontal"
              className="md:py-[0.6rem_!important] "
            >
              <RadioGroupItem
                value="repayment"
                id="repayment"
                className="transition-colors"
              />
              <FieldContent>
                <FieldTitle className="font-bold text-slate-900 md:text-[.75rem]">
                  Repayment
                </FieldTitle>
              </FieldContent>
            </Field>
          </FieldLabel>
          <FieldLabel
            htmlFor="interest-only"
            className="border-slate-900  has-data-[state=checked]:border-lime border-5 rounded-[.3125rem_!important] transition-colors"
          >
            <Field
              orientation="horizontal"
              className="md:py-[0.6rem_!important] transition-colors"
            >
              <RadioGroupItem
                className=" "
                value="interest-only"
                id="interest-only"
              />
              <FieldContent>
                <FieldTitle className="font-bold text-slate-900 md:text-[.75rem]">
                  Interest Only
                </FieldTitle>
              </FieldContent>
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
      <Button
        className={cn(
          "bg-lime text-slate-900 rounded-full h-15.5 text-[1.1875rem] font-bold items-center md:h-8 md:w-fit md:text-[0.75rem]  focus-visible:ring-slate-900  hover:bg-lime duration-100 ",
          buttonScale
        )}
        aria-label="calc"
        onPointerUp={() => setButtonScale("scale-100")}
        onPointerDown={() => setButtonScale("scale-95")}
        onPointerEnter={()=>setButtonScale("scale-100")}
        onPointerLeave={()=>setButtonScale("scale-100")}
      >
        <img src={CalculatorIcon} alt="" className="w-6 md:w-3" />
        Calculate Repayments
      </Button>
    </FieldGroup>
  );
}
