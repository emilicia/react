interface IColor{
    id: string
    name: string
    code: string
}

interface ICategory{
    id: string
    name: string
    color: IColor
}

interface ITask{
    id: string
    cotegory_id: string
    name: string
    completed: boolean
}