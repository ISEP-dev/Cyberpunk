const MercCard = ({merc}) => {

    return (
        <div
            className={`bg-gray-800 shadow-lg overflow-hidden sm:rounded-lg p-6 m-4 w-1/5 text-white ${!merc.isAlive ? "opacity-60" : ""}`}>
            <i className={`fas fa-${merc.isAlive ? "heart text-red-600" : "heart-broken" +
                " text-gray-300"} float-right`}/>
            <div className="text-center font-bold text-xl pb-2">
                {merc.nickname} <span className="text-sm">({merc.legalAge} years old)</span>
            </div>
            <div className="text-yellow-400 font-bold">€$ {merc.eddies}</div>
            <div><i className="fas fa-bomb text-red-600 mr-2"/>{merc.weapon.name}</div>
        </div>
    )
}

export default MercCard;
