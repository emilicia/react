import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { nanoid } from 'nanoid/non-secure'
import { Box, Theme } from '@/utils/theme'
import { getColors } from '@/utils/helpers'
import { Picker } from '@react-native-picker/picker'
import { color, useTheme } from '@shopify/restyle'
import useGlobalStore from '@/store'
import { useNavigation } from '@react-navigation/native'




const COLORS = getColors()


const CreateCategory = () => {
    const theme=useTheme<Theme>()
    const navigation = useNavigation()

    const [newCategory, setnewCategory] = useState<ICategory>({
        id: `category-${nanoid()}`,
        color: {
            code: "",
            id: `color-${nanoid()}`,
            name:"",

        },
        name: "",

    })

    const {addCategory} = useGlobalStore ()





    const handleOnCreateCategory=()=>{
        if (newCategory.name.length>0){
            addCategory(newCategory)
            navigation.navigate("Home")
        }
    }
  return (
    <Box flex={1} bg='gray200' pb="10">
        <Box
        flexDirection='column'
        alignItems='center'
        justifyContent='space-between'
        mx='4'>
            
            <Box width={"100%"}
            mt='5'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'>
        <Box 
        width={"100%"}
        bg='white'
        borderRadius='rounde2Xl'
        alignItems='center'
        justifyContent='center'
        p="4">
     
     <TextInput 
      value={newCategory.name}
      style={{
        fontSize: 20,
        width: "100%",
      }}
      onChangeText={(text)=> {
        setnewCategory((prev)=> {
            return{
                ...prev,
                name: text,
            }
        })
      }}
      placeholder='Create new category'
      />
      
      <Box height={20}/>
      <Box width={"100%"}>
      

      {/* <Picker 
      selectedValue={newCategory.color.id}
      onValueChange={(itemValue, itemIndex)=>{
        const currentColor = COLORS.find(
            (color) => color.id == itemValue
        )
        if (currentColor){
            setnewCategory((prev) => {
                return{
                    ...prev,
                    color:currentColor,
                }

            }) 
        }
      }} */}



      {/* style={{
        backgroundColor: theme.colors.white,
        borderRadius: 16,
      }}>  */}
        
        {/* {COLORS.map((color)=>(
            <Picker.Item key={color.id} label={color.name} value={color.id}/>
        ))

        }
      </Picker> */}
      </Box>
      </Box>
        </Box>
        <Box bg='blu500' width={"100%"} 
        py='4' borderRadius='rounde2Xl'
        alignItems='center'
        style = {{marginTop:"100%",
              
        }}
        
        >
            <Pressable onPress={handleOnCreateCategory}>
            <Text  >Create</Text>
            </Pressable>
        </Box>
      </Box>
   </Box>
  )
}

export default CreateCategory

const styles = StyleSheet.create({})