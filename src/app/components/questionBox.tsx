
export default function QuestionBox(question: string, img: string) {
    return (
        <div>
            <div className="grid grid-cols-1 gap-2 bg-white text-black p-5 rounded-lg shadow-md">
                <h2 className="leading-tight">{question}</h2>
                <img className="rounded-xl h-[350px] m-auto object-contain" src={"./images/" + img} alt={img} />
            </div>
        </div>
    );
}