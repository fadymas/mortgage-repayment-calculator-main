import { Button } from "./ui/button";
import Results from "./Results";
import FieldSection from "./FieldSection";

export default function MortgageForm() {
  return (
    <>
      <form
        action=""
        id="mortgageForm"
        className="flex flex-col gap-6 py-4  px-6.25  md:rounded-l-2xl  md:w-1/2 md:gap-4"
        onSubmit={(e)=>e.preventDefault()}
      >
        <section className="title md:flex justify-between items-center ">
          <h1 className="text-[1.652rem] md:text-[1.2rem]  font-bold">
            Mortgage Calculator
          </h1>
          <Button
            type="reset"
            variant="link"
            className="underline p-0 text-[1.0625rem] md:text-[.6875rem] font-medium text-slate-700 hover:text-slate-900"
          >
            Clear All
          </Button>
        </section>
        <FieldSection />
      </form>
      <Results />
    </>
  );
}
