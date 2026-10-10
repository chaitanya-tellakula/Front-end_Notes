import MenuItem from "./MenuItem.jsx"
export default function MenuList(props)
{
    const items=props.data.map((item)=>{
        return(
            <MenuItem
                name={item.name}
                category={item.category}
                price={item.price}
                available={item.available}/>
        )
    })
    return(
        <div className="main-container">
            {items}
        </div>
    )
}