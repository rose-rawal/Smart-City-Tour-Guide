export const container={
    hidden:{ opacity: 0},
    show:{
        opacity:1,
        transition:{
            delayChildren:0.25,
            staggerChildren:0.2,
        },
    },
};

export const item={
    hidden:{x:'-100%'},
    show:{
        x:"0",
        transition:{
            duration:0.25
        },
    },
};