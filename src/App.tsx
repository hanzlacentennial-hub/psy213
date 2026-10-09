import {useState} from 'react';
import {questions} from './data';
const shuffle=<T,>(items:T[]):T[]=>[...items].sort(()=>Math.random()-.5);
type Item={question:string;answer:string;options:string[]};
const newQuiz=():Item[]=>shuffle(questions).map(q=>({...q,options:shuffle([q.answer,...q.wrong])}));
export default function App(){
 const [quiz,setQuiz]=useState<Item[]>(newQuiz);
 const [index,setIndex]=useState(0);
 const [selected,setSelected]=useState<string|null>(null);
 const [score,setScore]=useState(0);
 const [finished,setFinished]=useState(false);
 const current=quiz[index];
 const choose=(option:string)=>{if(selected!==null)return;setSelected(option);if(option===current.answer)setScore(s=>s+1);};
 const next=()=>{if(index===quiz.length-1)setFinished(true);else{setIndex(i=>i+1);setSelected(null);}};
 const restart=()=>{setQuiz(newQuiz());setIndex(0);setSelected(null);setScore(0);setFinished(false);};
 return <main className="shell"><header><span className="eyebrow">FREE STUDY PRACTICE</span><h1>Chapter 4 <em>Quiz</em></h1><p>Piaget, Vygotsky & cognitive development</p></header>
 {finished?<section className="panel result"><div className="eyebrow">QUIZ COMPLETE</div><h2>{Math.round(score/quiz.length*100)}%</h2><p>You got <strong>{score}</strong> out of <strong>{quiz.length}</strong> correct.</p><button onClick={restart}>Try again ↗</button></section>:<section className="panel"><div className="top"><span>Question {index+1} / {quiz.length}</span><span>{score} correct so far</span></div><div className="progress"><div style={{width:`${(index+1)/quiz.length*100}%`}}/></div><h2>{current.question}</h2><div className="answers">{current.options.map((option,i)=><button key={option} className={'choice '+(selected!==null?(option===current.answer?'correct':option===selected?'incorrect':'muted'):'')} onClick={()=>choose(option)} disabled={selected!==null}><span className="letter">{String.fromCharCode(65+i)}</span><span>{option}</span></button>)}</div>{selected!==null&&<div className="feedback"><strong>{selected===current.answer?'✓ Correct!':'Not quite.'}</strong><p>Answer: {current.answer}</p><button className="next" onClick={next}>{index===quiz.length-1?'See results':'Next question'} →</button></div>}</section>}
 <footer>Made for classmates · No account required · Based on shared Chapter 4 study cards</footer></main>;
}
