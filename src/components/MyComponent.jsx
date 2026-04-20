const MyComponent = (probs) => {
    console.log(probs)
    const { children, bgColor, height } = probs
    return <div style={{
        background: bgColor,
        height: height + "px"
    }}>
        <div>
            this is my component
        </div>
        <div>
            {children}
        </div>
    </div>
}

export default MyComponent