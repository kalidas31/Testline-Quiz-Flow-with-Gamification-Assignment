

export default function IsCorrectAnswer({iscorrect}){
    return <div className="text-white">
        {
           iscorrect ? "You are Correct" : "Your are Wrong"
        }
    </div>
}