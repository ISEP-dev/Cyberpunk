import PropTypes from "prop-types";

const MercCard = ({merc}) => {

    return (
        <div className={`${!merc.isAlive ? "bg-gray-400 opacity-90" : "bg-gray-800"} z-0 relative flex flex-col shadow-lg overflow-hidden sm:rounded-lg p-6 m-4 w-1/5 text-white`}>
            <i className={`fas fa-${merc.isAlive ? "heart text-red-600" : "heart-broken text-gray-300"} absolute right-4 top-4 float-right`}/>
            <span className="text-center font-bold text-xl">{merc.nickname}</span>
            <span className="text-center text-sm pb-2">({merc.legalAge} years old)</span>
            <div className={`${merc.isAlive ? "text-yellow-400" : "text-white"}  font-bold`}>
                €$ {merc.eddies}
            </div>
            <div>
                <i className={`${merc.isAlive ? "text-red-600" : "text-white"} fas fa-bomb mr-2`}/>
                {merc.weapon.name}
            </div>
        </div>
    )
}

MercCard.propTypes = {
    merc: PropTypes.object.isRequired,
}

export default MercCard;
