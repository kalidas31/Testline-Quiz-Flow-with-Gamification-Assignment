

export default function NoOfQuestionsViewed({count,length}){
    return <div className="text-white">
        {count+1}/{length}
    </div>
}