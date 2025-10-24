import { Card, CardContent } from "./ui/card";
import emptyIcon from "../assets/illustration-empty.svg";
export default function Results({
  month,
  total,
}: {
  month: string;
  total: string;
}) {
  console.log(total, month);
  if (total) {
    return (
      <section className="results bg-slate-900 flex flex-col justify-center items-center gap-7 py-5 px-4 md:rounded-r-2xl md:rounded-bl-[5rem]  md:w-1/2 md:gap-5 md:px-8">
        <div className="instructions gap-4 flex flex-col justify-center items-start">
          <h2 className="font-bold  text-lg tracking-[-0.04rem] md:tracking-[0.1rem] text-slate-50">
            Your results
          </h2>
          <p className="text-start text-slate-500 font-medium text-[0.97rem]/[1.5rem] md:text-[1rem]/[1.4rem]">
            Your results are shown below based on the information you provided.
            To adjust the results. edit the form and click "calculate
            repayments" again.
          </p>
        </div>
        <Card className="self-stretch border-t-5  border-t-lime bg-slate-950/20 md:rounded-[5px]">
          <CardContent>
            <div className="monthly">
              <h3 className="text-slate-500 text-[0.6875rem]">
                Your monthly repayments
              </h3>
              <output className="text-lime text-[2.4375rem] font-bold">
                &euro;{month}
              </output>
            </div>
            <hr className="bg-slate-500 my-4" />
            <div className="total ">
              <h3 className="text-slate-500 text-[0.6875rem] mb-2">
                Total you'll repay over the term
              </h3>
              <output className="text-slate-50 text-[1.0625rem] font-bold">
                &euro;{total}
              </output>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  } else {
    return (
      <section className="results bg-slate-900 flex flex-col justify-center items-center gap-9 py-7 px-4  md:rounded-r-2xl md:rounded-bl-[5rem]  md:w-1/2 md:gap-5 md:px-8">
        <img
          src={emptyIcon}
          alt="Empty Results"
          className="w-48  md:w-30 md:h-28"
        />
        <div className="instructions gap-4.5 flex flex-col justify-center items-center">
          <h2 className="font-bold text-[1.625rem] -tracking-[0.01rem] text-slate-50 md:text-[1.0625rem] md:-tracking-[0.03rem]">
            Results shown here
          </h2>
          <p className="text-center text-slate-500 font-medium text-[ 1.0625rem]/[1.5rem] md:text-[.625rem]">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      </section>
    );
  }
}
