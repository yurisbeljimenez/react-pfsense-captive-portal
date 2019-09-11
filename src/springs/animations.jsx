export const slideUp = {
    from: {
        opacity: 0,
        transform: `translateY(100%)`
    },
    to: {
        opacity: 1,
        transform: `translateY(0)`
    }
}
export const slideDown = {
    from: {
        position: 'fixed',
        opacity: 0,
        transform: `translateY(-100%)`
    },
    to: {
        position: 'relative',
        opacity: 1,
        transform: `translateY(0)`
    }
}

export const removeElement = {
    from: {
        postion: 'relative',
        opacity: 1
    },
    to: {
        position: 'fixed',
        transform: `translateY(-100%)`,
        opacity: 0,
    }
}

export const fadeIn = {
    from: { opacity: 0 }, to: { opacity: 1 }
}