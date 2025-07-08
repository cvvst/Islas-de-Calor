ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32719").setExtent([324571.317275, 6271754.435365, 367721.569067, 6315428.173748]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.806000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_islas_huella_urbana_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'islas_huella_urbana<br />\
    <img src="styles/legend/islas_huella_urbana_1_0.png" /> 23,1291<br />\
    <img src="styles/legend/islas_huella_urbana_1_1.png" /> 27,1548<br />\
    <img src="styles/legend/islas_huella_urbana_1_2.png" /> 31,1806<br />\
    <img src="styles/legend/islas_huella_urbana_1_3.png" /> 35,2063<br />\
    <img src="styles/legend/islas_huella_urbana_1_4.png" /> 39,2320<br />\
    <img src="styles/legend/islas_huella_urbana_1_5.png" /> 43,2578<br />\
    <img src="styles/legend/islas_huella_urbana_1_6.png" /> 47,2835<br />\
    <img src="styles/legend/islas_huella_urbana_1_7.png" /> 50,9996<br />\
    <img src="styles/legend/islas_huella_urbana_1_8.png" /> 54,0963<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/islas_huella_urbana_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7886933.849000, -3983491.366200, -7843703.849000, -3936781.366200]
        })
    });
var format_red_hidrica_reproyect_2 = new ol.format.GeoJSON();
var features_red_hidrica_reproyect_2 = format_red_hidrica_reproyect_2.readFeatures(json_red_hidrica_reproyect_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_red_hidrica_reproyect_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_hidrica_reproyect_2.addFeatures(features_red_hidrica_reproyect_2);
var lyr_red_hidrica_reproyect_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_hidrica_reproyect_2, 
                style: style_red_hidrica_reproyect_2,
                popuplayertitle: 'red_hidrica_reproyect',
                interactive: false,
                title: '<img src="styles/legend/red_hidrica_reproyect_2.png" /> red_hidrica_reproyect'
            });
var format_Red_vial_reproyect_3 = new ol.format.GeoJSON();
var features_Red_vial_reproyect_3 = format_Red_vial_reproyect_3.readFeatures(json_Red_vial_reproyect_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Red_vial_reproyect_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_vial_reproyect_3.addFeatures(features_Red_vial_reproyect_3);
var lyr_Red_vial_reproyect_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_vial_reproyect_3, 
                style: style_Red_vial_reproyect_3,
                popuplayertitle: 'Red_vial_reproyect',
                interactive: false,
                title: '<img src="styles/legend/Red_vial_reproyect_3.png" /> Red_vial_reproyect'
            });
var format_EstadisticasComunales_4 = new ol.format.GeoJSON();
var features_EstadisticasComunales_4 = format_EstadisticasComunales_4.readFeatures(json_EstadisticasComunales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_EstadisticasComunales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadisticasComunales_4.addFeatures(features_EstadisticasComunales_4);
var lyr_EstadisticasComunales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstadisticasComunales_4, 
                style: style_EstadisticasComunales_4,
                popuplayertitle: 'Estadisticas Comunales',
                interactive: true,
                title: '<img src="styles/legend/EstadisticasComunales_4.png" /> Estadisticas Comunales'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_islas_huella_urbana_1.setVisible(true);lyr_red_hidrica_reproyect_2.setVisible(true);lyr_Red_vial_reproyect_3.setVisible(true);lyr_EstadisticasComunales_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_islas_huella_urbana_1,lyr_red_hidrica_reproyect_2,lyr_Red_vial_reproyect_3,lyr_EstadisticasComunales_4];
lyr_red_hidrica_reproyect_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'ORDEN_1': 'ORDEN_1', 'ORDEN_2': 'ORDEN_2', 'ORDEN_3': 'ORDEN_3', 'ORDEN_4': 'ORDEN_4', 'ORDEN_5': 'ORDEN_5', 'COD_HUMEDA': 'COD_HUMEDA', 'NOM_HUMEDA': 'NOM_HUMEDA', 'REG_FID_1': 'REG_FID_1', 'TIPO': 'TIPO', 'FID_REF_2': 'FID_REF_2', 'COD_CUEN': 'COD_CUEN', 'COD_SUBC': 'COD_SUBC', 'COD_SSUBC': 'COD_SSUBC', 'NOM_SSUBC': 'NOM_SSUBC', 'POLY_AREA': 'POLY_AREA', 'Datum_Area': 'Datum_Area', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'Shape_Leng': 'Shape_Leng', 'NOM_SUBC': 'NOM_SUBC', 'NOM_CUEN': 'NOM_CUEN', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Red_vial_reproyect_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ROL': 'ROL', 'ROL_LABEL': 'ROL_LABEL', 'NOMBRE': 'NOMBRE', 'CARPETA': 'CARPETA', 'REGION': 'REGION', 'ENROLADO': 'ENROLADO', 'CONCESIONA': 'CONCESIONA', 'Shape_Leng': 'Shape_Leng', 'Distancia': 'Distancia', });
lyr_EstadisticasComunales_4.set('fieldAliases', {'COMUNA': 'COMUNA', 'NOM_REGION': 'NOM_REGION', 'NOM_PROVIN': 'NOM_PROVIN', 'NOM_COMUNA': 'NOM_COMUNA', 'COMUNAS': 'Comuna', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Temp': 'Temperatura Promedio (C°)', });
lyr_red_hidrica_reproyect_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'ORDEN_1': 'TextEdit', 'ORDEN_2': 'TextEdit', 'ORDEN_3': 'TextEdit', 'ORDEN_4': 'TextEdit', 'ORDEN_5': 'TextEdit', 'COD_HUMEDA': 'TextEdit', 'NOM_HUMEDA': 'TextEdit', 'REG_FID_1': 'TextEdit', 'TIPO': 'TextEdit', 'FID_REF_2': 'TextEdit', 'COD_CUEN': 'TextEdit', 'COD_SUBC': 'TextEdit', 'COD_SSUBC': 'TextEdit', 'NOM_SSUBC': 'TextEdit', 'POLY_AREA': 'TextEdit', 'Datum_Area': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'NOM_SUBC': 'TextEdit', 'NOM_CUEN': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Red_vial_reproyect_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ROL': 'TextEdit', 'ROL_LABEL': 'TextEdit', 'NOMBRE': 'TextEdit', 'CARPETA': 'TextEdit', 'REGION': 'TextEdit', 'ENROLADO': 'TextEdit', 'CONCESIONA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Distancia': 'TextEdit', });
lyr_EstadisticasComunales_4.set('fieldImages', {'COMUNA': 'TextEdit', 'NOM_REGION': 'TextEdit', 'NOM_PROVIN': 'TextEdit', 'NOM_COMUNA': 'TextEdit', 'COMUNAS': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Temp': 'TextEdit', });
lyr_red_hidrica_reproyect_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'ORDEN_1': 'no label', 'ORDEN_2': 'no label', 'ORDEN_3': 'no label', 'ORDEN_4': 'no label', 'ORDEN_5': 'no label', 'COD_HUMEDA': 'no label', 'NOM_HUMEDA': 'inline label - always visible', 'REG_FID_1': 'no label', 'TIPO': 'no label', 'FID_REF_2': 'no label', 'COD_CUEN': 'no label', 'COD_SUBC': 'no label', 'COD_SSUBC': 'no label', 'NOM_SSUBC': 'no label', 'POLY_AREA': 'no label', 'Datum_Area': 'no label', 'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'Shape_Leng': 'no label', 'NOM_SUBC': 'no label', 'NOM_CUEN': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'SUPERFICIE': 'inline label - always visible', });
lyr_Red_vial_reproyect_3.set('fieldLabels', {'OBJECTID': 'no label', 'ROL': 'no label', 'ROL_LABEL': 'no label', 'NOMBRE': 'inline label - always visible', 'CARPETA': 'no label', 'REGION': 'no label', 'ENROLADO': 'no label', 'CONCESIONA': 'no label', 'Shape_Leng': 'no label', 'Distancia': 'inline label - always visible', });
lyr_EstadisticasComunales_4.set('fieldLabels', {'COMUNA': 'hidden field', 'NOM_REGION': 'hidden field', 'NOM_PROVIN': 'hidden field', 'NOM_COMUNA': 'hidden field', 'COMUNAS': 'inline label - always visible', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Temp': 'inline label - always visible', });
lyr_EstadisticasComunales_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});