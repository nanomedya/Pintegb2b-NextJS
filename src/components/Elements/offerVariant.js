export const offerVariant = {
    initial: {
        opacity: 0,
        padding: 0,
        right: -300,
        backgroundColor: '#F3f5f9'
    },
    animate: {
        opacity: 1,
        right: 0,
        transition: { duration: .3 }
    },
    exit: {
        opacity: 0,
        transition: { duration: .3 }
    }
}