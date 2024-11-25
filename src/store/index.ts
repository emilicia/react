import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { persist, createJSONStorage} from "zustand/middleware"

interface IGlobaleStore{
    categories: ICategory[]
    tasks: ITask[]
    addCategory: (category:ICategory) =>void 
}
const useGlobalStore =  create<IGlobaleStore>()(
    persist(
        (set, get) => ({
            categories: [],
            tasks: [],
            addCategory:(category)=> {
                const {categories} = get()
                const updatedCategories = [...categories, category]
                set({
                    categories: updatedCategories,
                })

            },
        }),
        {
            name:"todos-store",
            storage: createJSONStorage(()=>AsyncStorage)
        }
    )
)
export default useGlobalStore