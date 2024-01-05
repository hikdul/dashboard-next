
import { CardCounter } from '@/app/camponents/shoppingCar';
import { Metadata } from 'next';

 export const metadata:Metadata = {
    title: 'Counter',
    description: 'un simple contador'
}

export default function CounterPage()
{
    
    return(
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>COUNTER Items</span>
            <CardCounter value={7}/>
        </div>
    )
} 