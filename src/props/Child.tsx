interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({color}: ChildProps) => {
    return <div>{color}</div>
}

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return (
        <>
        {color}
        <button onClick={onClick}>Click Me</button>
        </>
    )
}