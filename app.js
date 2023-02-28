(function () {
    var graph = new joint.dia.Graph();
    var paper = new joint.dia.Paper({
        el: document.getElementById('myholder'),
        model: graph,
        width: 800,
        height: 600,
        gridSize: 1
    });
    var zoo = new joint.shapes.uml.Class({
        position: {
            x: 100,
            y: 100
        },
        size: {
            width: 100,
            height: 50
        },
        name: 'Zoo',
        attributes: ['name'],
        methods: []
    });
    var enclosure = new joint.shapes.uml.Class({
        position: {
            x: 300,
            y: 100
        },
        size: {
            width: 100,
            height: 50
        },
        name: 'Enclosure',
        attributes: ['name', 'size', 'type'],
        methods: []
    });
    var caretaker = new joint.shapes.uml.Class({
        position: {
            x: 500,
            y: 100
        },
        size: {
            width: 100,
            height: 50
        },
        name: 'Caretaker',
        attributes: [],
        methods: []
    });
    var animal = new joint.shapes.uml.Class({
        position: {
            x: 300,
            y: 300
        },
        size: {
            width: 100,
            height: 50
        },
        name: 'Animal',
        attributes: ['name', 'species', 'diet'],
        methods: []
    });
    var medicalRecord = new joint.shapes.uml.Class({
        position: {
            x: 500,
            y: 300
        },
        size: {
            width: 100,
            height: 50
        },
        name: 'Medical Record',
        attributes: ['date', 'description'],
        methods: []
    });
    var zooEnclosure = new joint.shapes.uml.Association({
        source: {
            id: zoo.id
        },
        target: {
            id: enclosure.id
        },
        attrs: {
            line: {
                strokeDasharray: '5 2'
            }
        },
        labels: [{
            attrs: {
                text: {
                    text: 'has'
                }
            }
        }]
    });
    var enclosureAnimal = new joint.shapes.uml.Association({
        source: {
            id: enclosure.id
        },
        target: {
            id: animal.id
        },
        attrs: {
            line: {
                strokeDasharray: '5 2'
            }
        },
        labels: [{
            attrs: {
                text: {
                    text: 'contains'
                }
            }
        }]
    });
    var zooCaretaker = new joint.shapes.uml.Association({
        source: {
            id: zoo.id
        },
        target: {
            id: caretaker.id
        },
        attrs: {
            line: {
                strokeDasharray: '5 2'
            }
        },
        labels: [{
            attrs: {
                text: {
                    text: 'employs'
                }
            }
        }]
    });
    var caretakerEnclosure = new joint.shapes.uml.Association({
        source: {
            id: caretaker.id
        },
        target: {
            id: enclosure.id
        },
        attrs: {
            line: {
                strokeDasharray: '5 2'
            }
        },
        labels: [{
            attrs: {
                text: {
                    text: 'takes care of'
                }
            }
        }]
    });
    var animalMedicalRecord = new joint.shapes.uml.Association({
        source: {
            id: animal.id
        },
        target: {
            id: medicalRecord.id
        },
        attrs: {
            line: {
                strokeDasharray: '5 2'
            }
        },
        labels: [{
            attrs: {
                text: {
                    text: 'has'
                }
            }
        }]
    });

    graph.addCells([zoo, enclosure, caretaker, animal, medicalRecord, zooEnclosure, enclosureAnimal, zooCaretaker, caretakerEnclosure, animalMedicalRecord]);
})();
