export const mobilVariant = {
    initial: {
        height: 0,
    },
    animate: {
        height: '100vh',
        transition: { duration: .3 }
    },
    exit: {
        height: 0,
        transition: { duration: .3 }
    }
}

export const tabVariant = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
        x: 100,
        transition: { duration: 0.3 },
    },
};

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