import { card } from './card.css';


export function Card({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className={card}>
            {children}
        </div>
    )
}