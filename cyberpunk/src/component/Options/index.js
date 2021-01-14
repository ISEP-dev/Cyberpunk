import {updateMercWeaponAsync} from  "../../service/merc";

const Options = (props) => {
    const sellWeapon = (nickname) =>{
        const price = props.weapon.price
        for( let k=0;k<props.merc;k++){
            if (nickname === props.merc[k].nickname){
                const eddies = props.merc.eddies
                if(eddies<price){
                    alert(nickname + " doesn't have enough eddies !!")
                } else{
                    const newEddies = price-eddies
                    const newWeaponId = props.weapon.id
                    const mercId = props.merc[k].id
                    updateMercWeaponAsync(mercId,newWeaponId)
                    alert(nickname + "bought" + props.weapon.name )
                }
            }
        }
    }
    return (
    <option key={props.merc.nickname} value= {props.merc.nickname}>
        {props.merc.nickname}
    </option>
    )}

export default Options;