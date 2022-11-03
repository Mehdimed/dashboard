import { CaretDown } from "phosphor-react";
import { useState } from "react";

export default function FAQ() {

    const [faq, setFaq] = useState([false , false , false , false]);

    const open = (index) => {
        let faqCopy = [...faq];
        faqCopy[index] = !faqCopy[index];
        setFaq(faqCopy);
    }

  return (
    <div className="flex flex-col pl-12 pt-6 max-w-3xl gap-[2px] ease-in-out duration-500">
      {faq.map((item, index) => (
        <div 
            className="flex flex-col bg-navbar dark:bg-dark-navbar py-2 px-4 cursor-pointer rounded ease-in-out duration-500"
            onClick={() => open(index)}
        >
        <div className="text-lg font-bold flex flex-row items-center justify-between ">
            What is Lorem Ipsum?
            <CaretDown className={`ease-in-out duration-500 ${item ? '' : 'rotate-90'}`}/>
        </div>
        <div className={`text-gray-500 mt-2 overflow-hidden ease-in-out duration-500  ${item ? 'h-24' : 'h-0'}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      ))}
    </div>
  );
}
