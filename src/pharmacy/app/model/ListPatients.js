Ext.define('RaxaEmr.Pharmacy.model.ListPatients', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        persist: false
    }, {
        name: 'uuid',
        type: 'string'
    }, {
        name: 'display',
        type: 'string'
    }, {
        name: 'encounters',
        model: 'RaxaEmr.Pharmacy.model.Encounter'
    }, {
        name: 'person',
        model: 'RaxaEmr.Pharmacy.model.Person'
    }, {
        name: 'encounters',
        model: 'RaxaEmr.Pharmacy.model.Encounter'
    }, {
        name: 'identifiers',
        model: 'RaxaEmr.Pharmacy.model.Identifier'
    }, {
        name: 'age',
        mapping: 'person.age'
    }, {
        name: 'identifier',
        mapping: 'identifiers[0].identifier'
    }, {
        name: 'name',
        mapping: 'person.display'
    }]
})
