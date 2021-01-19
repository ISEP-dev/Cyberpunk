const Weapons = (props) => {

    const weapons = props.weapons

    const redBarre =(nbr) =>{
        const rem = Math.round(4*nbr/25)*4
        const width = 'bg-red-600 h-1.5 w-' + rem.toString()
        return(width)
    }

    const blueBarre =(nbr) =>{
        const rem = Math.round(4*nbr/25)*4
        const width = 'bg-blue-600 h-1.5 w-' + rem.toString()
        return(width)
    }

    const greenBarre =(nbr) =>{
        const rem = nbr*8
        const width = 'bg-green-600 h-1.5 w-' + rem.toString()
        return(width)
    }

    const weaponList = weapons.map(element =>{
        return(
            <div key={element.id} className="w-96 p-4 m-4 border border-gray-600 flex flex-col justify-between" >
                <div>
                    <div className ='flex justify-center mb-2'>
                        <h1 className ='font-bold underline '>{element.name}</h1>
                    </div>
                    <p>{element.description}</p>
                </div>
                <div className="mt-3">
                    <div className="flex justify-between">
                        <p className='text-sm'>Damage : {element.damage} </p><div className="border border-gray-600 w-64 h-2 mt-1.5"><div className={redBarre(element.damage)}></div></div>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-sm'>Accuracy : {element.accuracy}</p><div className="border border-gray-600 w-64 h-2 mt-1.5"><div className={blueBarre(element.accuracy)}></div></div>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-sm'>Speed : {element.firerate}</p><div className="border border-gray-600 w-64 h-2 mt-1.5"><div className={greenBarre(element.firerate)}></div></div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center bg-yellow-300 w-28 rounded-xl px-1.5'>
                            <p>Buy : {element.price} $ </p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    })
    return (
        <div className="flex flex-wrap w-full">
            {weaponList}
        </div>
    );
};

export default Weapons;