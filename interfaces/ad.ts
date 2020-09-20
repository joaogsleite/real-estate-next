export interface Ad {
  id: string
  name: string
  area: number
  freguesia?: string
  concelho?: string
  distrito?: string
  topology: number
  price: number
  link: string
}