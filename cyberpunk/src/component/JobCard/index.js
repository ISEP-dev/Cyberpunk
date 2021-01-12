const JobCard = ({element}) => {
    return (
        <div key={element.id}>
            <div>
                <div><h1>{element.title}</h1></div>
            </div>
            <div className='flex'>
                <div className='w-1/4'>
                    <p>Fixer :{element.fixer}</p>
                    <p>Henchmen :{element.henchmenCount}</p>
                    <p>Reward :{element.reward}</p>
                </div>
                <p className='w-3/4'>{element.description}</p>
            </div>
        </div>
    );
}
export default JobCard;