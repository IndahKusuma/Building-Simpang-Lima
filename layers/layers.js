var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_BuildingKotaSemarang_2 = new ol.format.GeoJSON();
var features_BuildingKotaSemarang_2 = format_BuildingKotaSemarang_2.readFeatures(json_BuildingKotaSemarang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingKotaSemarang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingKotaSemarang_2.addFeatures(features_BuildingKotaSemarang_2);
var lyr_BuildingKotaSemarang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BuildingKotaSemarang_2, 
                style: style_BuildingKotaSemarang_2,
                interactive: true,
                title: '<img src="styles/legend/BuildingKotaSemarang_2.png" /> Building Kota Semarang'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_BuildingKotaSemarang_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_BuildingKotaSemarang_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'man_made': 'man_made', 'website': 'website', 'tourism': 'tourism', 'stars': 'stars', 'rooms': 'rooms', 'reservation': 'reservation', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'image': 'image', 'email': 'email', 'description': 'description', 'brand': 'brand', 'air_conditioning': 'air_conditioning', 'addr:housenumber': 'addr:housenumber', 'religion': 'religion', 'sport': 'sport', 'leisure': 'leisure', 'cuisine': 'cuisine', 'school:type_idn': 'school:type_idn', 'office': 'office', 'admin_level': 'admin_level', 'operator:type': 'operator:type', 'amenity': 'amenity', 'addr:full': 'addr:full', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'shop': 'shop', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'access:roof': 'access:roof', });
lyr_BuildingKotaSemarang_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tower_type': 'tower_type', 'tower_cons': 'tower_cons', 'man_made': 'man_made', 'website': 'website', 'tourism': 'tourism', 'stars': 'stars', 'rooms': 'rooms', 'reservatio': 'reservatio', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'image': 'image', 'email': 'email', 'descriptio': 'descriptio', 'brand': 'brand', 'air_condit': 'air_condit', 'addr_house': 'addr_house', 'religion': 'religion', 'sport': 'sport', 'leisure': 'leisure', 'cuisine': 'cuisine', 'school_typ': 'school_typ', 'office': 'office', 'admin_leve': 'admin_leve', 'operator_t': 'operator_t', 'amenity': 'amenity', 'addr_full': 'addr_full', 'building_l': 'building_l', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'shop': 'shop', 'name': 'name', 'capacity_p': 'capacity_p', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_f': 'building_f', 'building_c': 'building_c', 'backup_gen': 'backup_gen', 'access_roo': 'access_roo', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tower:type': '', 'tower:construction': '', 'man_made': '', 'website': '', 'tourism': '', 'stars': '', 'rooms': '', 'reservation': '', 'internet_access:fee': '', 'internet_access': '', 'image': '', 'email': '', 'description': '', 'brand': '', 'air_conditioning': '', 'addr:housenumber': '', 'religion': '', 'sport': '', 'leisure': '', 'cuisine': '', 'school:type_idn': '', 'office': '', 'admin_level': '', 'operator:type': '', 'amenity': '', 'addr:full': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:city': '', 'shop': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'access:roof': '', });
lyr_BuildingKotaSemarang_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tower_type': '', 'tower_cons': '', 'man_made': '', 'website': '', 'tourism': '', 'stars': '', 'rooms': '', 'reservatio': '', 'internet_a': '', 'internet_1': '', 'image': '', 'email': '', 'descriptio': '', 'brand': '', 'air_condit': '', 'addr_house': '', 'religion': '', 'sport': '', 'leisure': '', 'cuisine': '', 'school_typ': '', 'office': '', 'admin_leve': '', 'operator_t': '', 'amenity': '', 'addr_full': '', 'building_l': '', 'addr_stree': '', 'addr_postc': '', 'addr_city': '', 'shop': '', 'name': '', 'capacity_p': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_f': '', 'building_c': '', 'backup_gen': '', 'access_roo': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'man_made': 'no label', 'website': 'no label', 'tourism': 'no label', 'stars': 'no label', 'rooms': 'no label', 'reservation': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'image': 'no label', 'email': 'no label', 'description': 'no label', 'brand': 'no label', 'air_conditioning': 'no label', 'addr:housenumber': 'no label', 'religion': 'no label', 'sport': 'no label', 'leisure': 'no label', 'cuisine': 'no label', 'school:type_idn': 'no label', 'office': 'no label', 'admin_level': 'no label', 'operator:type': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'shop': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'access:roof': 'no label', });
lyr_BuildingKotaSemarang_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tower_type': 'no label', 'tower_cons': 'no label', 'man_made': 'no label', 'website': 'no label', 'tourism': 'no label', 'stars': 'no label', 'rooms': 'no label', 'reservatio': 'no label', 'internet_a': 'no label', 'internet_1': 'no label', 'image': 'no label', 'email': 'no label', 'descriptio': 'no label', 'brand': 'no label', 'air_condit': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'sport': 'no label', 'leisure': 'no label', 'cuisine': 'no label', 'school_typ': 'no label', 'office': 'no label', 'admin_leve': 'no label', 'operator_t': 'no label', 'amenity': 'no label', 'addr_full': 'no label', 'building_l': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_city': 'no label', 'shop': 'no label', 'name': 'no label', 'capacity_p': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'backup_gen': 'no label', 'access_roo': 'no label', });
lyr_BuildingKotaSemarang_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});