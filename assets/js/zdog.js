const LOW = 2;
const HIGH = 8;

const DIAMETER = 70;
const SHIP_COLOR = "#fafafa";
const LENGTH = 150;
const Scene = new Zdog.Illustration({
    element: "canvas",
    dragRotate: true,
    resize: "fullscreen",
    rotate: {
        y: Zdog.TAU * 0.05,
        x: Zdog.TAU * 0.05
    }
});



const randomInRange = (max, min) =>
    Math.floor(Math.random() * (max - min)) + min;



;


const update = () => {
    Scene.rotate.y += 0.001;
    Scene.updateRenderGraph();
    requestAnimationFrame(update);
};

const main = new Zdog.Cylinder({
    addTo: Scene,
    length: LENGTH,
    diameter: DIAMETER,
    rotate: {
        x: Zdog.TAU / 4
    },

    stroke: false,
    color: SHIP_COLOR
});


const fin = new Zdog.Shape({
    addTo: main,
    color: "silver",
    stroke: 5,
    fill: true,
    path: [
        {
            z: 20,
            y: 0
        },

        {
            y: DIAMETER * 0.5,
            z: -30
        },

        {
            y: 0,
            z: -30
        }],


    translate: {
        z: -40,
        y: DIAMETER / 2
    }
});



const screen = new Zdog.Ellipse({
    addTo: main,
    width: DIAMETER,
    height: DIAMETER,
    color: "dodgerblue",
    quarters: 1,
    stroke: 10,
    translate: {
        z: 60,
        y: 5
    },

    rotate: {
        z: Zdog.TAU / 2.65
    }
});



const tip = new Zdog.Hemisphere({
    addTo: main,
    diameter: DIAMETER,
    color: "#333",
    translate: {
        x: 0,
        y: 0,
        z: LENGTH / 2
    }
});



const RADIUS = 20;
const ROCKET_DIAMETER = DIAMETER * 0.75;
const bottomAnchor = new Zdog.Anchor({
    addTo: Scene,
    translate: {
        x: -RADIUS,
        y: 90,
        z: RADIUS
    }
});


const bottom = new Zdog.Cylinder({
    addTo: bottomAnchor,
    diameter: ROCKET_DIAMETER,
    length: LENGTH * 0.15,
    stroke: false,
    color: "#333",
    rotate: {
        x: Zdog.TAU / 4
    }
});


const bottomCone = new Zdog.Hemisphere({
    addTo: bottomAnchor,
    diameter: ROCKET_DIAMETER,
    color: SHIP_COLOR,
    rotate: {
        x: Zdog.TAU / 4
    },

    translate: {
        y: -DIAMETER * 0.15
    }
});



const bottomJet = new Zdog.Ellipse({
    addTo: bottomAnchor,
    diameter: ROCKET_DIAMETER * 0.5,
    stroke: 5,
    fill: true,
    color: "orange",
    rotate: {
        x: Zdog.TAU / 4
    },

    translate: {
        y: 15
    }
});



bottomAnchor.copyGraph({
    translate: {
        ...bottomAnchor.translate,
        x: RADIUS
    }
});



bottomAnchor.copyGraph({
    translate: {
        ...bottomAnchor.translate,
        z: -RADIUS
    }
});



bottomAnchor.copyGraph({
    translate: {
        ...bottomAnchor.translate,
        x: RADIUS,
        z: -RADIUS
    }
});



const wings = new Zdog.Shape({
    addTo: Scene,
    stroke: 10,
    color: "silver",
    fill: true,
    translate: {
        z: DIAMETER / -2 - 5
    },

    path: [
        {
            x: DIAMETER * 0.25,
            y: -60
        },

        {
            x: DIAMETER * -0.25,
            y: -60
        },

        {
            x: DIAMETER * -0.75,
            y: 20
        },

        {
            x: -100,
            y: LENGTH / 2 - 10
        },

        {
            x: 100,
            y: LENGTH / 2 - 10
        },

        {
            x: DIAMETER * 0.75,
            y: 20
        }]
});




const spot = new Zdog.Ellipse({
    addTo: wings,
    diameter: 15,
    fill: true,
    stroke: 2,
    color: "#e74c3c",
    backface: "silver",
    translate: {
        x: 50,
        y: 50,
        z: 4
    }
});



update();
