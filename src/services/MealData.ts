export interface MealData {
  _id: string
  mealname: string
  plateImageURL?: string
  description?: string[]
  createdAt: string
  updatedAt?: string
}

export const meals: MealData[] = [
    {
        "_id": "69bae43993dfeb9f77e0f6e6",
        "mealname": "Wed Mar 18 2026: breakfast",
        "plateImageURL": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/tk%2Fphoto%2F2025%2F04-2025%2F2025-04-fish-tacos%2Ffish-tacos-574",
        "description": [
            "description text",
            "now I've done thise and that"
        ],
        "createdAt": "2026-03-18T17:43:21.338Z",
        "updatedAt": "2026-03-20T15:10:01.167Z"
    },
    {
        "_id":"69bae55f1e306baebde45ec7",
        "mealname": "Wed Mar 18 2026: lunch",
        "plateImageURL": "https://www.goodlifeeats.com/wp-content/uploads/2025/11/the-best-hot-roast-beef-sandwiches-720x720.jpg",
        "description": [
            "second attempt"
        ],
        "createdAt": "2026-03-18T17:48:15.995Z",
        "updatedAt": "2026-03-20T15:10:17.402Z"
    },
    {
        "_id": "69bd4aae139d6230b612103d",
        "mealname": "Fri Mar 20 2026: breakfast",
        "plateImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9B4ch0blVrmcRofyJSnYS9dqbZnHDCxrCxg&s",
        "description": ["bagel", "cream cheese", "coffee"],
        "createdAt": "2026-03-20T13:25:02.312Z",
        "updatedAt": "2026-03-20T13:25:02.312Z"
    },
    {
        "_id": "69d50a832fd1ace02f4ff642",
        "mealname": "Tue Apr 07 2026: breakfast",
        "plateImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb3GK_Yw74n3-yeJNZsP474EeyQatEU5m2A&s",
        "description": [
            "coffee",
            "more coffee",
            "apple"
        ],
        "createdAt": "2026-04-07T13:45:39.866Z",
        "updatedAt": "2026-04-07T13:45:56.984Z"
    }
]