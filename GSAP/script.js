gsap.to('#box',{
    x:100,
    y:200,
    duration:1,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    scale:0.5,
    repeat:-1,
    yoyo:true
})

gsap.from('#box1',{
    x:200,
    y:200,
    duration:3,
    delay:3,
    rotate:180,
    backgroundColor:"red"
})

gsap.from('h1',{
    y:60,
    color:"red",
    duration:2,
    delay:1,
    opacity:0,
    stagger:-1
})
gsap.to('h2',{
    x:60,
    color:"green",
    duration:2,
    delay:1,
    opacity:0,
    stagger:1
})


// gsap.to('#boxa',{
//     x:200,
//     rotate:360,
//     delay:1
// })
// gsap.to('#boxb',{
//     x:300,
//     rotate:360,
//     delay:2
// })
// gsap.to('#boxc',{
//     x:400,
//     rotate:360,
//     delay:3
// })

// don't use like this

var tl = gsap.timeline()

tl.to('#boxa',{
    x:200,
    rotate:360,
    delay:1
})
tl.to('#boxb',{
    x:300,
    rotate:360,
})
tl.to('#boxc',{
    x:400,
    rotate:360,
})