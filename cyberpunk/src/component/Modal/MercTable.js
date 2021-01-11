import {useState, useEffect} from "react";
import PropTypes from "prop-types";

const MercTable = (props) => {

    const [mercsList,setMercsList] = useState(props.mercsList);

    useEffect(() => {
        setMercsList(props.mercsList);
    }, [props.mercsList])


    const addLineToMercTable = () => {
        let list = []
        console.log("Merclist in MercTable is : ")
        console.log(mercsList)
        mercsList.forEach(merc => {
            console.log(merc)
            list.push(
                <tr>
                    <td>{merc[1]}</td>
                    <td>{merc[2]}</td>
                    <td>{merc[3]}</td>
                    <td>{merc[4]}</td>
                </tr>
           )
        })
        return <div>{list}</div>      
    }

    return (
        
            <table>
                <tr>
                    <th>Nickname</th>
                    <th>Legal Age</th>
                    <th>Weapon</th>
                    <th>eddies</th>
                </tr>
                
               {addLineToMercTable()}
                
            </table>
    )

}

MercTable.defaultProps = {
    weapon: "Militech M-10AF Lexington",
    eddies: 0,
}

MercTable.propTypes = {
    nickname: PropTypes.string.isRequired,
    legalAge: PropTypes.number.isRequired,
    weapon: PropTypes.string.isRequired,
    eddies: PropTypes.number.isRequired,
    
}

export default MercTable