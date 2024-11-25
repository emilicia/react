import { Pressable, StyleSheet,  View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Text } from '@/utils/theme'
import useGlobalStore from '@/store'

const Home = () => {
    const navigation=useNavigation()


const{tasks, categories} = useGlobalStore()

  return (
    <View>
      <Text variant='text2Xl'>Acceil</Text>
      {categories.map((category)=>(
        <Box p="4" bg="blu200">
          <Text color="blu500">{category.name}</Text>
        </Box>
      ))}
      <Pressable onPress={()=>{
        navigation.navigate("CreateCategory")

      }}>
        <Text variant='text4Xl' color='green500'>
            Taches à faire
        </Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})