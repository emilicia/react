import { nanoid } from "nanoid"
import { palette } from "../theme/colors"


export const getColors=() =>{
    const colors: IColor[] = Object.keys(palette).map((paletteColor)=>{
        return{
        id: `color_${nanoid()}`,
        name: paletteColor,
        code: palette[paletteColor as keyof typeof palette], 
    }
    })


    return colors
        
    
}