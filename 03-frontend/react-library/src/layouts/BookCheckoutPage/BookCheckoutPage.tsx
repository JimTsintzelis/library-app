import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";

export const BookCheckoutPage =() => {
   
    const [book, setBook] = useState<BookModel>();
    const [isLoadingBook, setisLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const bookId = (window.location.pathname).split('/')[2];

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl: string =`http://localhost:8080/api/books${bookId}`;

            

            const response = await fetch(baseUrl);

            if(!response.ok) {
                throw new Error('Something went wrong');
            }

            const responseJson = await response.json();

            const loadedBooks: BookModel = {
                id: responseJson.id,
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                copies: responseJson.copies,
                copiesAvailable: responseJson.copiesAvailable,
                category: responseJson.category,
                img: responseJson.img,
            };

            
            
            setBook(loadedBooks);
            setisLoading(false);

        };
        fetchBook().catch((error: any) => {
            setisLoading(false);
            setHttpError(error.message);
        })
    }, []);
    
    return (
        <div>
            <h3> </h3>

        </div>
    );
}