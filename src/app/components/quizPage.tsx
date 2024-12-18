"use client"
import { use, useEffect, useState } from 'react';
import AnswerBox from './answerBox';
import QuestionBox from './questionBox';


export default function QuizPage() {
    //load questions from db

    const [data, setData] = useState<[{
        answers: string[], correctIndex: number, question: string
        , image: string
    }]>([{ answers: ["not loaded"], correctIndex: 0, question: "not loaded", image: "not loaded" }]);
    const [qNumber, setQNumber] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [total, settotal] = useState(1);

    useEffect(() => {
        fetch("questionsDb.json").then((response) => {
            response.json().then((newData) => {
                setData(newData)
                const qNum = Math.floor(Math.random() * 10);
                setQNumber(qNum);
            })
        })
    }, [])

    function nextQuestion() {
        setQNumber(qNumber + 1);
        if (qNumber == 9) {
            setQNumber(0);
        }
        const rightBox = document.getElementById("right-answer");
        if (rightBox) {
            rightBox.className = "bg-[#5F5980] text-white p-5 text-left rounded-lg w-full";
        }
        const wrongBox = document.getElementById("wrong-answer")
        if (wrongBox) {
            wrongBox.className = "bg-[#5F5980] text-white p-5 text-left rounded-lg w-full";
        }
        setAnswered(false);
        settotal(total + 1);
        //refresh the Answer Box

    }

    return (
        <div className="text-center text-lg font-irish text-[50px] bg-[#2F3061]">
            <div className='flex flex-row justify-around align-center p-5 bg-[#5F5980]'>
                <h1 className='m-auto'>Quiz Page</h1>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <div id="answer-box">{data.length > 0 ? AnswerBox(data[qNumber].answers, data[qNumber].correctIndex, answered, setAnswered, score, setScore) : AnswerBox(["not loaded"], 0, answered, setAnswered, score, setScore)}</div>
                    <div className='p-10'>
                        <button onClick={nextQuestion} className='text-white p-5 text-center rounded-lg w-full bg-[#417F43] m-auto '>Next question</button>
                    </div>
                </div>
                <div className='m-5'>
                    {data.length > 0 ? QuestionBox(data[qNumber].question, data[qNumber].image) : QuestionBox("not loaded", "not loaded")}
                    <div className='text-white text-center text-5xl m-5' >
                        Score = {score}/{total}
                    </div>
                </div>
            </div>
        </div>
    );
}