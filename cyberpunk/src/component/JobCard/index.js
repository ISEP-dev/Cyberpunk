const JobCard = ({element}) => {
    return (
        <div key={element.id} 
        className="w-1/5 min-w-min bg-gray-800 p-5 text-white grid justify-items-stretch space-y-4">
            <div className="text-center">
                <div><h1 className="font-bold text-yellow-400 text-2xl">{element.title}</h1></div>
            </div>
            <div className='flex'>
            <div className='w-3/5'>
                    <p className="break-words text-justify">{element.description}</p>
                </div>
                <div className='w-2/5 ml-4 flex flex-col justify-between'>
                    <div className='space-y-4'>
                        <p><b>Fixer:</b> {element.fixer}</p>
                        <p><b>Henchmen:</b> {element.henchmenCount}</p>
                        <p><b>Reward:</b> <b className="text-yellow-400">€${element.reward}</b></p>
                    </div>
                    <div  className="flex flex-row-reverse">
                        <form>
                            <input 
                            className="bg-yellow-200 text-gray-900 rounded-full p-2 cursor-pointer 
                            hover:bg-yellow-400" type="button" value="Apply" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default JobCard;