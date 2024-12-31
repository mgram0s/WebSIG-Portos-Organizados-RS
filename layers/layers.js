var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_1PoligonaldareadoPortoOrganizado_1 = new ol.format.GeoJSON();
var features_1PoligonaldareadoPortoOrganizado_1 = format_1PoligonaldareadoPortoOrganizado_1.readFeatures(json_1PoligonaldareadoPortoOrganizado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1PoligonaldareadoPortoOrganizado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1PoligonaldareadoPortoOrganizado_1.addFeatures(features_1PoligonaldareadoPortoOrganizado_1);
var lyr_1PoligonaldareadoPortoOrganizado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1PoligonaldareadoPortoOrganizado_1, 
                style: style_1PoligonaldareadoPortoOrganizado_1,
                popuplayertitle: "1. Poligonal da Área do Porto Organizado",
                interactive: true,
                title: '<img src="styles/legend/1PoligonaldareadoPortoOrganizado_1.png" /> 1. Poligonal da Área do Porto Organizado'
            });
var format_20AcostagemAtual_2 = new ol.format.GeoJSON();
var features_20AcostagemAtual_2 = format_20AcostagemAtual_2.readFeatures(json_20AcostagemAtual_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20AcostagemAtual_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20AcostagemAtual_2.addFeatures(features_20AcostagemAtual_2);
var lyr_20AcostagemAtual_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20AcostagemAtual_2, 
                style: style_20AcostagemAtual_2,
                popuplayertitle: "20. Acostagem Atual",
                interactive: true,
                title: '<img src="styles/legend/20AcostagemAtual_2.png" /> 20. Acostagem Atual'
            });
var format_19ArmazenagemAtual_3 = new ol.format.GeoJSON();
var features_19ArmazenagemAtual_3 = format_19ArmazenagemAtual_3.readFeatures(json_19ArmazenagemAtual_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19ArmazenagemAtual_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19ArmazenagemAtual_3.addFeatures(features_19ArmazenagemAtual_3);
var lyr_19ArmazenagemAtual_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19ArmazenagemAtual_3, 
                style: style_19ArmazenagemAtual_3,
                popuplayertitle: "19. Armazenagem Atual",
                interactive: true,
                title: '<img src="styles/legend/19ArmazenagemAtual_3.png" /> 19. Armazenagem Atual'
            });
var format_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4 = new ol.format.GeoJSON();
var features_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4 = format_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4.readFeatures(json_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4.addFeatures(features_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4);
var lyr_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4, 
                style: style_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4,
                popuplayertitle: "18. Áreas Não Afetas às Atividades Portuárias Disponíveis em Exploração Indireta Atual",
                interactive: true,
                title: '<img src="styles/legend/18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4.png" /> 18. Áreas Não Afetas às Atividades Portuárias Disponíveis em Exploração Indireta Atual'
            });
var format_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5 = new ol.format.GeoJSON();
var features_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5 = format_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5.readFeatures(json_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5.addFeatures(features_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5);
var lyr_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5, 
                style: style_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5,
                popuplayertitle: "17. Áreas Não Afetas às Atividades Portuárias em Exploração Indireta Atual",
                interactive: true,
                title: '<img src="styles/legend/17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5.png" /> 17. Áreas Não Afetas às Atividades Portuárias em Exploração Indireta Atual'
            });
var format_16reasNoAfetassOperaesPorturiasAtual_6 = new ol.format.GeoJSON();
var features_16reasNoAfetassOperaesPorturiasAtual_6 = format_16reasNoAfetassOperaesPorturiasAtual_6.readFeatures(json_16reasNoAfetassOperaesPorturiasAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16reasNoAfetassOperaesPorturiasAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16reasNoAfetassOperaesPorturiasAtual_6.addFeatures(features_16reasNoAfetassOperaesPorturiasAtual_6);
var lyr_16reasNoAfetassOperaesPorturiasAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16reasNoAfetassOperaesPorturiasAtual_6, 
                style: style_16reasNoAfetassOperaesPorturiasAtual_6,
                popuplayertitle: "16. Áreas Não Afetas às Operações Portuárias Atual",
                interactive: true,
                title: '<img src="styles/legend/16reasNoAfetassOperaesPorturiasAtual_6.png" /> 16. Áreas Não Afetas às Operações Portuárias Atual'
            });
var format_15reaseInstalaesAlfandegadasdoPorto_7 = new ol.format.GeoJSON();
var features_15reaseInstalaesAlfandegadasdoPorto_7 = format_15reaseInstalaesAlfandegadasdoPorto_7.readFeatures(json_15reaseInstalaesAlfandegadasdoPorto_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15reaseInstalaesAlfandegadasdoPorto_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15reaseInstalaesAlfandegadasdoPorto_7.addFeatures(features_15reaseInstalaesAlfandegadasdoPorto_7);
var lyr_15reaseInstalaesAlfandegadasdoPorto_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15reaseInstalaesAlfandegadasdoPorto_7, 
                style: style_15reaseInstalaesAlfandegadasdoPorto_7,
                popuplayertitle: "15. Áreas e Instalações Alfandegadas do Porto",
                interactive: true,
                title: '<img src="styles/legend/15reaseInstalaesAlfandegadasdoPorto_7.png" /> 15. Áreas e Instalações Alfandegadas do Porto'
            });
var format_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8 = new ol.format.GeoJSON();
var features_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8 = format_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8.readFeatures(json_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8.addFeatures(features_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8);
var lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8, 
                style: style_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8,
                popuplayertitle: "13. Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento Atual",
                interactive: true,
                title: '<img src="styles/legend/13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8.png" /> 13. Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento Atual'
            });
var format_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9 = new ol.format.GeoJSON();
var features_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9 = format_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9.readFeatures(json_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9.addFeatures(features_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9);
var lyr_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9, 
                style: style_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9,
                popuplayertitle: "12.3 Áreas Afetas às Atividades Portuárias de Uso Público Atual",
                interactive: true,
                title: '<img src="styles/legend/123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9.png" /> 12.3 Áreas Afetas às Atividades Portuárias de Uso Público Atual'
            });
var format_121reasAfetassOperaesPorturiasArrendadasAtual_10 = new ol.format.GeoJSON();
var features_121reasAfetassOperaesPorturiasArrendadasAtual_10 = format_121reasAfetassOperaesPorturiasArrendadasAtual_10.readFeatures(json_121reasAfetassOperaesPorturiasArrendadasAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_121reasAfetassOperaesPorturiasArrendadasAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_121reasAfetassOperaesPorturiasArrendadasAtual_10.addFeatures(features_121reasAfetassOperaesPorturiasArrendadasAtual_10);
var lyr_121reasAfetassOperaesPorturiasArrendadasAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_121reasAfetassOperaesPorturiasArrendadasAtual_10, 
                style: style_121reasAfetassOperaesPorturiasArrendadasAtual_10,
                popuplayertitle: "12.1 Áreas Afetas às Operações Portuárias Arrendadas Atual",
                interactive: true,
                title: '<img src="styles/legend/121reasAfetassOperaesPorturiasArrendadasAtual_10.png" /> 12.1 Áreas Afetas às Operações Portuárias Arrendadas Atual'
            });
var format_11reasAfetassOperaesPorturiasAtual_11 = new ol.format.GeoJSON();
var features_11reasAfetassOperaesPorturiasAtual_11 = format_11reasAfetassOperaesPorturiasAtual_11.readFeatures(json_11reasAfetassOperaesPorturiasAtual_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11reasAfetassOperaesPorturiasAtual_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11reasAfetassOperaesPorturiasAtual_11.addFeatures(features_11reasAfetassOperaesPorturiasAtual_11);
var lyr_11reasAfetassOperaesPorturiasAtual_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11reasAfetassOperaesPorturiasAtual_11, 
                style: style_11reasAfetassOperaesPorturiasAtual_11,
                popuplayertitle: "11. Áreas Afetas às Operações Portuárias Atual",
                interactive: true,
                title: '<img src="styles/legend/11reasAfetassOperaesPorturiasAtual_11.png" /> 11. Áreas Afetas às Operações Portuárias Atual'
            });
var format_8FundeadourosAtual_12 = new ol.format.GeoJSON();
var features_8FundeadourosAtual_12 = format_8FundeadourosAtual_12.readFeatures(json_8FundeadourosAtual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8FundeadourosAtual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8FundeadourosAtual_12.addFeatures(features_8FundeadourosAtual_12);
var lyr_8FundeadourosAtual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8FundeadourosAtual_12, 
                style: style_8FundeadourosAtual_12,
                popuplayertitle: "8. Fundeadouros Atual",
                interactive: true,
                title: '<img src="styles/legend/8FundeadourosAtual_12.png" /> 8. Fundeadouros Atual'
            });
var format_7BaciasdeEvoluoAtual_13 = new ol.format.GeoJSON();
var features_7BaciasdeEvoluoAtual_13 = format_7BaciasdeEvoluoAtual_13.readFeatures(json_7BaciasdeEvoluoAtual_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7BaciasdeEvoluoAtual_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7BaciasdeEvoluoAtual_13.addFeatures(features_7BaciasdeEvoluoAtual_13);
var lyr_7BaciasdeEvoluoAtual_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7BaciasdeEvoluoAtual_13, 
                style: style_7BaciasdeEvoluoAtual_13,
                popuplayertitle: "7. Bacias de Evolução Atual",
                interactive: true,
                title: '<img src="styles/legend/7BaciasdeEvoluoAtual_13.png" /> 7. Bacias de Evolução Atual'
            });
var format_6CanaldeAcessoAtual_14 = new ol.format.GeoJSON();
var features_6CanaldeAcessoAtual_14 = format_6CanaldeAcessoAtual_14.readFeatures(json_6CanaldeAcessoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6CanaldeAcessoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6CanaldeAcessoAtual_14.addFeatures(features_6CanaldeAcessoAtual_14);
var lyr_6CanaldeAcessoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6CanaldeAcessoAtual_14, 
                style: style_6CanaldeAcessoAtual_14,
                popuplayertitle: "6. Canal de Acesso Atual",
                interactive: true,
                title: '<img src="styles/legend/6CanaldeAcessoAtual_14.png" /> 6. Canal de Acesso Atual'
            });
var format_9AcessosRodoviriosInternosAtual_15 = new ol.format.GeoJSON();
var features_9AcessosRodoviriosInternosAtual_15 = format_9AcessosRodoviriosInternosAtual_15.readFeatures(json_9AcessosRodoviriosInternosAtual_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9AcessosRodoviriosInternosAtual_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9AcessosRodoviriosInternosAtual_15.addFeatures(features_9AcessosRodoviriosInternosAtual_15);
var lyr_9AcessosRodoviriosInternosAtual_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9AcessosRodoviriosInternosAtual_15, 
                style: style_9AcessosRodoviriosInternosAtual_15,
                popuplayertitle: "9. Acessos Rodoviários Internos Atual",
                interactive: true,
                title: '<img src="styles/legend/9AcessosRodoviriosInternosAtual_15.png" /> 9. Acessos Rodoviários Internos Atual'
            });
var format_4AcessosHidroviriosExternos_16 = new ol.format.GeoJSON();
var features_4AcessosHidroviriosExternos_16 = format_4AcessosHidroviriosExternos_16.readFeatures(json_4AcessosHidroviriosExternos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4AcessosHidroviriosExternos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4AcessosHidroviriosExternos_16.addFeatures(features_4AcessosHidroviriosExternos_16);
var lyr_4AcessosHidroviriosExternos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4AcessosHidroviriosExternos_16, 
                style: style_4AcessosHidroviriosExternos_16,
                popuplayertitle: "4. Acessos Hidroviários Externos",
                interactive: true,
                title: '<img src="styles/legend/4AcessosHidroviriosExternos_16.png" /> 4. Acessos Hidroviários Externos'
            });
var format_3AcessosFerroviriosExternos_17 = new ol.format.GeoJSON();
var features_3AcessosFerroviriosExternos_17 = format_3AcessosFerroviriosExternos_17.readFeatures(json_3AcessosFerroviriosExternos_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3AcessosFerroviriosExternos_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3AcessosFerroviriosExternos_17.addFeatures(features_3AcessosFerroviriosExternos_17);
var lyr_3AcessosFerroviriosExternos_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3AcessosFerroviriosExternos_17, 
                style: style_3AcessosFerroviriosExternos_17,
                popuplayertitle: "3. Acessos Ferroviários Externos",
                interactive: true,
                title: '<img src="styles/legend/3AcessosFerroviriosExternos_17.png" /> 3. Acessos Ferroviários Externos'
            });
var format_2AcessosRodoviriosExternos_18 = new ol.format.GeoJSON();
var features_2AcessosRodoviriosExternos_18 = format_2AcessosRodoviriosExternos_18.readFeatures(json_2AcessosRodoviriosExternos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2AcessosRodoviriosExternos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2AcessosRodoviriosExternos_18.addFeatures(features_2AcessosRodoviriosExternos_18);
var lyr_2AcessosRodoviriosExternos_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2AcessosRodoviriosExternos_18, 
                style: style_2AcessosRodoviriosExternos_18,
                popuplayertitle: "2. Acessos Rodoviários Externos",
                interactive: true,
                title: '<img src="styles/legend/2AcessosRodoviriosExternos_18.png" /> 2. Acessos Rodoviários Externos'
            });
var format_1PoligonalPortodePelotas_19 = new ol.format.GeoJSON();
var features_1PoligonalPortodePelotas_19 = format_1PoligonalPortodePelotas_19.readFeatures(json_1PoligonalPortodePelotas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1PoligonalPortodePelotas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1PoligonalPortodePelotas_19.addFeatures(features_1PoligonalPortodePelotas_19);
var lyr_1PoligonalPortodePelotas_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1PoligonalPortodePelotas_19, 
                style: style_1PoligonalPortodePelotas_19,
                popuplayertitle: "1. Poligonal Porto de Pelotas",
                interactive: true,
                title: '<img src="styles/legend/1PoligonalPortodePelotas_19.png" /> 1. Poligonal Porto de Pelotas'
            });
var format_22reasUrbanaseRurais_20 = new ol.format.GeoJSON();
var features_22reasUrbanaseRurais_20 = format_22reasUrbanaseRurais_20.readFeatures(json_22reasUrbanaseRurais_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22reasUrbanaseRurais_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22reasUrbanaseRurais_20.addFeatures(features_22reasUrbanaseRurais_20);
var lyr_22reasUrbanaseRurais_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22reasUrbanaseRurais_20, 
                style: style_22reasUrbanaseRurais_20,
                popuplayertitle: "22. Áreas Urbanas e Rurais",
                interactive: true,
                title: '<img src="styles/legend/22reasUrbanaseRurais_20.png" /> 22. Áreas Urbanas e Rurais'
            });
var format_20AcostagemAtual_21 = new ol.format.GeoJSON();
var features_20AcostagemAtual_21 = format_20AcostagemAtual_21.readFeatures(json_20AcostagemAtual_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20AcostagemAtual_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20AcostagemAtual_21.addFeatures(features_20AcostagemAtual_21);
var lyr_20AcostagemAtual_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20AcostagemAtual_21, 
                style: style_20AcostagemAtual_21,
                popuplayertitle: "20. Acostagem Atual",
                interactive: true,
                title: '<img src="styles/legend/20AcostagemAtual_21.png" /> 20. Acostagem Atual'
            });
var format_19ArmazenagemAtual_22 = new ol.format.GeoJSON();
var features_19ArmazenagemAtual_22 = format_19ArmazenagemAtual_22.readFeatures(json_19ArmazenagemAtual_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19ArmazenagemAtual_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19ArmazenagemAtual_22.addFeatures(features_19ArmazenagemAtual_22);
var lyr_19ArmazenagemAtual_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19ArmazenagemAtual_22, 
                style: style_19ArmazenagemAtual_22,
                popuplayertitle: "19. Armazenagem Atual",
                interactive: true,
                title: '<img src="styles/legend/19ArmazenagemAtual_22.png" /> 19. Armazenagem Atual'
            });
var format_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23 = new ol.format.GeoJSON();
var features_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23 = format_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23.readFeatures(json_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23.addFeatures(features_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23);
var lyr_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23, 
                style: style_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23,
                popuplayertitle: "18. Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta Atual",
                interactive: true,
                title: '<img src="styles/legend/18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23.png" /> 18. Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta Atual'
            });
var format_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24 = new ol.format.GeoJSON();
var features_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24 = format_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24.readFeatures(json_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24.addFeatures(features_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24);
var lyr_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24, 
                style: style_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24,
                popuplayertitle: "17. Áreas Não Afetas às Operações Portuárias em Exploração Indireta Atual",
                interactive: true,
                title: '<img src="styles/legend/17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24.png" /> 17. Áreas Não Afetas às Operações Portuárias em Exploração Indireta Atual'
            });
var format_16reasNoAfetassOperaesPorturiasAtual_25 = new ol.format.GeoJSON();
var features_16reasNoAfetassOperaesPorturiasAtual_25 = format_16reasNoAfetassOperaesPorturiasAtual_25.readFeatures(json_16reasNoAfetassOperaesPorturiasAtual_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16reasNoAfetassOperaesPorturiasAtual_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16reasNoAfetassOperaesPorturiasAtual_25.addFeatures(features_16reasNoAfetassOperaesPorturiasAtual_25);
var lyr_16reasNoAfetassOperaesPorturiasAtual_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16reasNoAfetassOperaesPorturiasAtual_25, 
                style: style_16reasNoAfetassOperaesPorturiasAtual_25,
                popuplayertitle: "16. Áreas Não Afetas às Operações Portuárias Atual",
                interactive: true,
                title: '<img src="styles/legend/16reasNoAfetassOperaesPorturiasAtual_25.png" /> 16. Áreas Não Afetas às Operações Portuárias Atual'
            });
var format_15reaseInstalaesAlfandegadasdoPorto_26 = new ol.format.GeoJSON();
var features_15reaseInstalaesAlfandegadasdoPorto_26 = format_15reaseInstalaesAlfandegadasdoPorto_26.readFeatures(json_15reaseInstalaesAlfandegadasdoPorto_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15reaseInstalaesAlfandegadasdoPorto_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15reaseInstalaesAlfandegadasdoPorto_26.addFeatures(features_15reaseInstalaesAlfandegadasdoPorto_26);
var lyr_15reaseInstalaesAlfandegadasdoPorto_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15reaseInstalaesAlfandegadasdoPorto_26, 
                style: style_15reaseInstalaesAlfandegadasdoPorto_26,
                popuplayertitle: "15. Áreas e Instalações Alfandegadas do Porto",
                interactive: true,
                title: '<img src="styles/legend/15reaseInstalaesAlfandegadasdoPorto_26.png" /> 15. Áreas e Instalações Alfandegadas do Porto'
            });
var format_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27 = new ol.format.GeoJSON();
var features_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27 = format_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27.readFeatures(json_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27.addFeatures(features_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27);
var lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27, 
                style: style_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27,
                popuplayertitle: "13. Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento Atual",
                interactive: true,
                title: '<img src="styles/legend/13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27.png" /> 13. Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento Atual'
            });
var format_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28 = new ol.format.GeoJSON();
var features_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28 = format_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28.readFeatures(json_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28.addFeatures(features_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28);
var lyr_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28, 
                style: style_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28,
                popuplayertitle: "12.3. Áreas Afetas às Operações Portuárias de Uso Público Atual",
                interactive: true,
                title: '<img src="styles/legend/123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28.png" /> 12.3. Áreas Afetas às Operações Portuárias de Uso Público Atual'
            });
var format_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29 = new ol.format.GeoJSON();
var features_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29 = format_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29.readFeatures(json_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29.addFeatures(features_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29);
var lyr_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29, 
                style: style_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29,
                popuplayertitle: "12.2. Áreas Afetas às Operações Portuárias com Servidão de Passagem Atual",
                interactive: true,
                title: '<img src="styles/legend/122reasAfetassOperaesPorturiascomServidodePassagemAtual_29.png" /> 12.2. Áreas Afetas às Operações Portuárias com Servidão de Passagem Atual'
            });
var format_121reasAfetassOperaesPorturiasArrendadasAtual_30 = new ol.format.GeoJSON();
var features_121reasAfetassOperaesPorturiasArrendadasAtual_30 = format_121reasAfetassOperaesPorturiasArrendadasAtual_30.readFeatures(json_121reasAfetassOperaesPorturiasArrendadasAtual_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_121reasAfetassOperaesPorturiasArrendadasAtual_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_121reasAfetassOperaesPorturiasArrendadasAtual_30.addFeatures(features_121reasAfetassOperaesPorturiasArrendadasAtual_30);
var lyr_121reasAfetassOperaesPorturiasArrendadasAtual_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_121reasAfetassOperaesPorturiasArrendadasAtual_30, 
                style: style_121reasAfetassOperaesPorturiasArrendadasAtual_30,
                popuplayertitle: "12.1.  Áreas Afetas às Operações Portuárias Arrendadas Atual",
                interactive: true,
                title: '<img src="styles/legend/121reasAfetassOperaesPorturiasArrendadasAtual_30.png" /> 12.1.  Áreas Afetas às Operações Portuárias Arrendadas Atual'
            });
var format_11reasAfetassOperaesPorturiasAtual_31 = new ol.format.GeoJSON();
var features_11reasAfetassOperaesPorturiasAtual_31 = format_11reasAfetassOperaesPorturiasAtual_31.readFeatures(json_11reasAfetassOperaesPorturiasAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11reasAfetassOperaesPorturiasAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11reasAfetassOperaesPorturiasAtual_31.addFeatures(features_11reasAfetassOperaesPorturiasAtual_31);
var lyr_11reasAfetassOperaesPorturiasAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11reasAfetassOperaesPorturiasAtual_31, 
                style: style_11reasAfetassOperaesPorturiasAtual_31,
                popuplayertitle: "11. Áreas Afetas às Operações Portuárias Atual",
                interactive: true,
                title: '<img src="styles/legend/11reasAfetassOperaesPorturiasAtual_31.png" /> 11. Áreas Afetas às Operações Portuárias Atual'
            });
var format_8FUNDEADOUROSATUAL_32 = new ol.format.GeoJSON();
var features_8FUNDEADOUROSATUAL_32 = format_8FUNDEADOUROSATUAL_32.readFeatures(json_8FUNDEADOUROSATUAL_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8FUNDEADOUROSATUAL_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8FUNDEADOUROSATUAL_32.addFeatures(features_8FUNDEADOUROSATUAL_32);
var lyr_8FUNDEADOUROSATUAL_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8FUNDEADOUROSATUAL_32, 
                style: style_8FUNDEADOUROSATUAL_32,
                popuplayertitle: "8. FUNDEADOUROS ATUAL",
                interactive: true,
                title: '<img src="styles/legend/8FUNDEADOUROSATUAL_32.png" /> 8. FUNDEADOUROS ATUAL'
            });
var format_7BACIADEEVOLUOATUAL_33 = new ol.format.GeoJSON();
var features_7BACIADEEVOLUOATUAL_33 = format_7BACIADEEVOLUOATUAL_33.readFeatures(json_7BACIADEEVOLUOATUAL_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7BACIADEEVOLUOATUAL_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7BACIADEEVOLUOATUAL_33.addFeatures(features_7BACIADEEVOLUOATUAL_33);
var lyr_7BACIADEEVOLUOATUAL_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7BACIADEEVOLUOATUAL_33, 
                style: style_7BACIADEEVOLUOATUAL_33,
                popuplayertitle: "7. BACIA DE EVOLUÇÃO ATUAL",
                interactive: true,
                title: '<img src="styles/legend/7BACIADEEVOLUOATUAL_33.png" /> 7. BACIA DE EVOLUÇÃO ATUAL'
            });
var format_6CANALDEACESSOATUAL_34 = new ol.format.GeoJSON();
var features_6CANALDEACESSOATUAL_34 = format_6CANALDEACESSOATUAL_34.readFeatures(json_6CANALDEACESSOATUAL_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6CANALDEACESSOATUAL_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6CANALDEACESSOATUAL_34.addFeatures(features_6CANALDEACESSOATUAL_34);
var lyr_6CANALDEACESSOATUAL_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6CANALDEACESSOATUAL_34, 
                style: style_6CANALDEACESSOATUAL_34,
                popuplayertitle: "6. CANAL DE ACESSO ATUAL",
                interactive: true,
                title: '<img src="styles/legend/6CANALDEACESSOATUAL_34.png" /> 6. CANAL DE ACESSO ATUAL'
            });
var format_9ACESSOSRODOVIRIOSINTERNOSATUAL_35 = new ol.format.GeoJSON();
var features_9ACESSOSRODOVIRIOSINTERNOSATUAL_35 = format_9ACESSOSRODOVIRIOSINTERNOSATUAL_35.readFeatures(json_9ACESSOSRODOVIRIOSINTERNOSATUAL_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9ACESSOSRODOVIRIOSINTERNOSATUAL_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9ACESSOSRODOVIRIOSINTERNOSATUAL_35.addFeatures(features_9ACESSOSRODOVIRIOSINTERNOSATUAL_35);
var lyr_9ACESSOSRODOVIRIOSINTERNOSATUAL_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9ACESSOSRODOVIRIOSINTERNOSATUAL_35, 
                style: style_9ACESSOSRODOVIRIOSINTERNOSATUAL_35,
                popuplayertitle: "9. ACESSOS RODOVIÁRIOS INTERNOS ATUAL",
                interactive: true,
                title: '<img src="styles/legend/9ACESSOSRODOVIRIOSINTERNOSATUAL_35.png" /> 9. ACESSOS RODOVIÁRIOS INTERNOS ATUAL'
            });
var format_4AcessosHidroviriosExternos_36 = new ol.format.GeoJSON();
var features_4AcessosHidroviriosExternos_36 = format_4AcessosHidroviriosExternos_36.readFeatures(json_4AcessosHidroviriosExternos_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4AcessosHidroviriosExternos_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4AcessosHidroviriosExternos_36.addFeatures(features_4AcessosHidroviriosExternos_36);
var lyr_4AcessosHidroviriosExternos_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4AcessosHidroviriosExternos_36, 
                style: style_4AcessosHidroviriosExternos_36,
                popuplayertitle: "4. Acessos Hidroviários Externos",
                interactive: true,
                title: '<img src="styles/legend/4AcessosHidroviriosExternos_36.png" /> 4. Acessos Hidroviários Externos'
            });
var format_3AcessosFerroviriosExternos_37 = new ol.format.GeoJSON();
var features_3AcessosFerroviriosExternos_37 = format_3AcessosFerroviriosExternos_37.readFeatures(json_3AcessosFerroviriosExternos_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3AcessosFerroviriosExternos_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3AcessosFerroviriosExternos_37.addFeatures(features_3AcessosFerroviriosExternos_37);
var lyr_3AcessosFerroviriosExternos_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3AcessosFerroviriosExternos_37, 
                style: style_3AcessosFerroviriosExternos_37,
                popuplayertitle: "3. Acessos Ferroviários Externos",
                interactive: true,
                title: '<img src="styles/legend/3AcessosFerroviriosExternos_37.png" /> 3. Acessos Ferroviários Externos'
            });
var format_2ACESSOSRODOVIRIOSEXTERNOS_38 = new ol.format.GeoJSON();
var features_2ACESSOSRODOVIRIOSEXTERNOS_38 = format_2ACESSOSRODOVIRIOSEXTERNOS_38.readFeatures(json_2ACESSOSRODOVIRIOSEXTERNOS_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2ACESSOSRODOVIRIOSEXTERNOS_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2ACESSOSRODOVIRIOSEXTERNOS_38.addFeatures(features_2ACESSOSRODOVIRIOSEXTERNOS_38);
var lyr_2ACESSOSRODOVIRIOSEXTERNOS_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2ACESSOSRODOVIRIOSEXTERNOS_38, 
                style: style_2ACESSOSRODOVIRIOSEXTERNOS_38,
                popuplayertitle: "2. ACESSOS RODOVIÁRIOS EXTERNOS",
                interactive: true,
                title: '<img src="styles/legend/2ACESSOSRODOVIRIOSEXTERNOS_38.png" /> 2. ACESSOS RODOVIÁRIOS EXTERNOS'
            });
var format_1Poligonaldaareadoportoorganizado_39 = new ol.format.GeoJSON();
var features_1Poligonaldaareadoportoorganizado_39 = format_1Poligonaldaareadoportoorganizado_39.readFeatures(json_1Poligonaldaareadoportoorganizado_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1Poligonaldaareadoportoorganizado_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1Poligonaldaareadoportoorganizado_39.addFeatures(features_1Poligonaldaareadoportoorganizado_39);
var lyr_1Poligonaldaareadoportoorganizado_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1Poligonaldaareadoportoorganizado_39, 
                style: style_1Poligonaldaareadoportoorganizado_39,
                popuplayertitle: "1. Poligonal da area do porto organizado",
                interactive: true,
                title: '<img src="styles/legend/1Poligonaldaareadoportoorganizado_39.png" /> 1. Poligonal da area do porto organizado'
            });
var format_23Unidadesdeconservacao_40 = new ol.format.GeoJSON();
var features_23Unidadesdeconservacao_40 = format_23Unidadesdeconservacao_40.readFeatures(json_23Unidadesdeconservacao_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_23Unidadesdeconservacao_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_23Unidadesdeconservacao_40.addFeatures(features_23Unidadesdeconservacao_40);
var lyr_23Unidadesdeconservacao_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_23Unidadesdeconservacao_40, 
                style: style_23Unidadesdeconservacao_40,
                popuplayertitle: "23. Unidades de conservacao",
                interactive: true,
                title: '<img src="styles/legend/23Unidadesdeconservacao_40.png" /> 23. Unidades de conservacao'
            });
var format_22Areasurbanaserurais_41 = new ol.format.GeoJSON();
var features_22Areasurbanaserurais_41 = format_22Areasurbanaserurais_41.readFeatures(json_22Areasurbanaserurais_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22Areasurbanaserurais_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22Areasurbanaserurais_41.addFeatures(features_22Areasurbanaserurais_41);
var lyr_22Areasurbanaserurais_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22Areasurbanaserurais_41, 
                style: style_22Areasurbanaserurais_41,
                popuplayertitle: "22. Areas urbanas e rurais",
                interactive: true,
                title: '<img src="styles/legend/22Areasurbanaserurais_41.png" /> 22. Areas urbanas e rurais'
            });
var format_20Acostagematual_42 = new ol.format.GeoJSON();
var features_20Acostagematual_42 = format_20Acostagematual_42.readFeatures(json_20Acostagematual_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20Acostagematual_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20Acostagematual_42.addFeatures(features_20Acostagematual_42);
var lyr_20Acostagematual_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20Acostagematual_42, 
                style: style_20Acostagematual_42,
                popuplayertitle: "20. Acostagem - atual",
                interactive: true,
                title: '<img src="styles/legend/20Acostagematual_42.png" /> 20. Acostagem - atual'
            });
var format_19Armazenagematual_43 = new ol.format.GeoJSON();
var features_19Armazenagematual_43 = format_19Armazenagematual_43.readFeatures(json_19Armazenagematual_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19Armazenagematual_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19Armazenagematual_43.addFeatures(features_19Armazenagematual_43);
var lyr_19Armazenagematual_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19Armazenagematual_43, 
                style: style_19Armazenagematual_43,
                popuplayertitle: "19. Armazenagem - atual",
                interactive: true,
                title: '<img src="styles/legend/19Armazenagematual_43.png" /> 19. Armazenagem - atual'
            });
var format_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44 = new ol.format.GeoJSON();
var features_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44 = format_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44.readFeatures(json_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44.addFeatures(features_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44);
var lyr_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44, 
                style: style_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44,
                popuplayertitle: "18. Areas nao afetas as operacoes portuarias disponiveis para exploracao indireta - atual",
                interactive: true,
                title: '<img src="styles/legend/18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44.png" /> 18. Areas nao afetas as operacoes portuarias disponiveis para exploracao indireta - atual'
            });
var format_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45 = new ol.format.GeoJSON();
var features_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45 = format_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45.readFeatures(json_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45.addFeatures(features_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45);
var lyr_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45, 
                style: style_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45,
                popuplayertitle: "17. Areas nao afetas as operacoes portuarias em exploracao indireta - atual",
                interactive: true,
                title: '<img src="styles/legend/17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45.png" /> 17. Areas nao afetas as operacoes portuarias em exploracao indireta - atual'
            });
var format_16Areasnaoafetasasoperacoesportuariasatual_46 = new ol.format.GeoJSON();
var features_16Areasnaoafetasasoperacoesportuariasatual_46 = format_16Areasnaoafetasasoperacoesportuariasatual_46.readFeatures(json_16Areasnaoafetasasoperacoesportuariasatual_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16Areasnaoafetasasoperacoesportuariasatual_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16Areasnaoafetasasoperacoesportuariasatual_46.addFeatures(features_16Areasnaoafetasasoperacoesportuariasatual_46);
var lyr_16Areasnaoafetasasoperacoesportuariasatual_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16Areasnaoafetasasoperacoesportuariasatual_46, 
                style: style_16Areasnaoafetasasoperacoesportuariasatual_46,
                popuplayertitle: "16. Areas nao afetas as operacoes portuarias - atual",
                interactive: true,
                title: '<img src="styles/legend/16Areasnaoafetasasoperacoesportuariasatual_46.png" /> 16. Areas nao afetas as operacoes portuarias - atual'
            });
var format_15Areaseinstalacoesalfandegadas_47 = new ol.format.GeoJSON();
var features_15Areaseinstalacoesalfandegadas_47 = format_15Areaseinstalacoesalfandegadas_47.readFeatures(json_15Areaseinstalacoesalfandegadas_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15Areaseinstalacoesalfandegadas_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15Areaseinstalacoesalfandegadas_47.addFeatures(features_15Areaseinstalacoesalfandegadas_47);
var lyr_15Areaseinstalacoesalfandegadas_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15Areaseinstalacoesalfandegadas_47, 
                style: style_15Areaseinstalacoesalfandegadas_47,
                popuplayertitle: "15. Areas e instalacoes alfandegadas",
                interactive: true,
                title: '<img src="styles/legend/15Areaseinstalacoesalfandegadas_47.png" /> 15. Areas e instalacoes alfandegadas'
            });
var format_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48 = new ol.format.GeoJSON();
var features_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48 = format_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48.readFeatures(json_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48.addFeatures(features_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48);
var lyr_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48, 
                style: style_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48,
                popuplayertitle: "13. Areas afetas as operacoes portuarias disponiveis para arrendamento - atual",
                interactive: true,
                title: '<img src="styles/legend/13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48.png" /> 13. Areas afetas as operacoes portuarias disponiveis para arrendamento - atual'
            });
var format_123Areasafetasasoperacoesportuariasdeusopublicoatual_49 = new ol.format.GeoJSON();
var features_123Areasafetasasoperacoesportuariasdeusopublicoatual_49 = format_123Areasafetasasoperacoesportuariasdeusopublicoatual_49.readFeatures(json_123Areasafetasasoperacoesportuariasdeusopublicoatual_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_123Areasafetasasoperacoesportuariasdeusopublicoatual_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_123Areasafetasasoperacoesportuariasdeusopublicoatual_49.addFeatures(features_123Areasafetasasoperacoesportuariasdeusopublicoatual_49);
var lyr_123Areasafetasasoperacoesportuariasdeusopublicoatual_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_123Areasafetasasoperacoesportuariasdeusopublicoatual_49, 
                style: style_123Areasafetasasoperacoesportuariasdeusopublicoatual_49,
                popuplayertitle: "12.3 Areas afetas as operacoes portuarias de uso publico - atual",
                interactive: true,
                title: '<img src="styles/legend/123Areasafetasasoperacoesportuariasdeusopublicoatual_49.png" /> 12.3 Areas afetas as operacoes portuarias de uso publico - atual'
            });
var format_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50 = new ol.format.GeoJSON();
var features_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50 = format_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50.readFeatures(json_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50.addFeatures(features_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50);
var lyr_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50, 
                style: style_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50,
                popuplayertitle: "12.2 Areas afetas as operacoes portuarias com servidao de passagem - atual",
                interactive: true,
                title: '<img src="styles/legend/122Areasafetasasoperacoesportuariascomservidaodepassagematual_50.png" /> 12.2 Areas afetas as operacoes portuarias com servidao de passagem - atual'
            });
var format_121Areasafetasasoperacoesportuariasarrendadasatual_51 = new ol.format.GeoJSON();
var features_121Areasafetasasoperacoesportuariasarrendadasatual_51 = format_121Areasafetasasoperacoesportuariasarrendadasatual_51.readFeatures(json_121Areasafetasasoperacoesportuariasarrendadasatual_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_121Areasafetasasoperacoesportuariasarrendadasatual_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_121Areasafetasasoperacoesportuariasarrendadasatual_51.addFeatures(features_121Areasafetasasoperacoesportuariasarrendadasatual_51);
var lyr_121Areasafetasasoperacoesportuariasarrendadasatual_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_121Areasafetasasoperacoesportuariasarrendadasatual_51, 
                style: style_121Areasafetasasoperacoesportuariasarrendadasatual_51,
                popuplayertitle: "12.1 Areas afetas as operacoes portuarias arrendadas - atual",
                interactive: true,
                title: '<img src="styles/legend/121Areasafetasasoperacoesportuariasarrendadasatual_51.png" /> 12.1 Areas afetas as operacoes portuarias arrendadas - atual'
            });
var format_11Areasafetasasoperacoesportuariasatual_52 = new ol.format.GeoJSON();
var features_11Areasafetasasoperacoesportuariasatual_52 = format_11Areasafetasasoperacoesportuariasatual_52.readFeatures(json_11Areasafetasasoperacoesportuariasatual_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11Areasafetasasoperacoesportuariasatual_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11Areasafetasasoperacoesportuariasatual_52.addFeatures(features_11Areasafetasasoperacoesportuariasatual_52);
var lyr_11Areasafetasasoperacoesportuariasatual_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11Areasafetasasoperacoesportuariasatual_52, 
                style: style_11Areasafetasasoperacoesportuariasatual_52,
                popuplayertitle: "11. Areas afetas as operacoes portuarias - atual",
                interactive: true,
                title: '<img src="styles/legend/11Areasafetasasoperacoesportuariasatual_52.png" /> 11. Areas afetas as operacoes portuarias - atual'
            });
var format_8Fundeadourosatual_53 = new ol.format.GeoJSON();
var features_8Fundeadourosatual_53 = format_8Fundeadourosatual_53.readFeatures(json_8Fundeadourosatual_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8Fundeadourosatual_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8Fundeadourosatual_53.addFeatures(features_8Fundeadourosatual_53);
var lyr_8Fundeadourosatual_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8Fundeadourosatual_53, 
                style: style_8Fundeadourosatual_53,
                popuplayertitle: "8. Fundeadouros - atual",
                interactive: true,
                title: '<img src="styles/legend/8Fundeadourosatual_53.png" /> 8. Fundeadouros - atual'
            });
var format_7Baciasdeevolucaoatual_54 = new ol.format.GeoJSON();
var features_7Baciasdeevolucaoatual_54 = format_7Baciasdeevolucaoatual_54.readFeatures(json_7Baciasdeevolucaoatual_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7Baciasdeevolucaoatual_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7Baciasdeevolucaoatual_54.addFeatures(features_7Baciasdeevolucaoatual_54);
var lyr_7Baciasdeevolucaoatual_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7Baciasdeevolucaoatual_54, 
                style: style_7Baciasdeevolucaoatual_54,
                popuplayertitle: "7. Bacias de evolucao - atual",
                interactive: true,
                title: '<img src="styles/legend/7Baciasdeevolucaoatual_54.png" /> 7. Bacias de evolucao - atual'
            });
var format_10Acessosferroviariosinternosatual_55 = new ol.format.GeoJSON();
var features_10Acessosferroviariosinternosatual_55 = format_10Acessosferroviariosinternosatual_55.readFeatures(json_10Acessosferroviariosinternosatual_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10Acessosferroviariosinternosatual_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10Acessosferroviariosinternosatual_55.addFeatures(features_10Acessosferroviariosinternosatual_55);
var lyr_10Acessosferroviariosinternosatual_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10Acessosferroviariosinternosatual_55, 
                style: style_10Acessosferroviariosinternosatual_55,
                popuplayertitle: "10. Acessos ferroviarios internos - atual",
                interactive: true,
                title: '<img src="styles/legend/10Acessosferroviariosinternosatual_55.png" /> 10. Acessos ferroviarios internos - atual'
            });
var format_9Acessosrodoviariosinternosatual_56 = new ol.format.GeoJSON();
var features_9Acessosrodoviariosinternosatual_56 = format_9Acessosrodoviariosinternosatual_56.readFeatures(json_9Acessosrodoviariosinternosatual_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9Acessosrodoviariosinternosatual_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9Acessosrodoviariosinternosatual_56.addFeatures(features_9Acessosrodoviariosinternosatual_56);
var lyr_9Acessosrodoviariosinternosatual_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9Acessosrodoviariosinternosatual_56, 
                style: style_9Acessosrodoviariosinternosatual_56,
                popuplayertitle: "9. Acessos rodoviarios internos - atual",
                interactive: true,
                title: '<img src="styles/legend/9Acessosrodoviariosinternosatual_56.png" /> 9. Acessos rodoviarios internos - atual'
            });
var format_6Canaisdeacessoatual_57 = new ol.format.GeoJSON();
var features_6Canaisdeacessoatual_57 = format_6Canaisdeacessoatual_57.readFeatures(json_6Canaisdeacessoatual_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6Canaisdeacessoatual_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6Canaisdeacessoatual_57.addFeatures(features_6Canaisdeacessoatual_57);
var lyr_6Canaisdeacessoatual_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6Canaisdeacessoatual_57, 
                style: style_6Canaisdeacessoatual_57,
                popuplayertitle: "6. Canais de acesso - atual",
                interactive: true,
                title: '<img src="styles/legend/6Canaisdeacessoatual_57.png" /> 6. Canais de acesso - atual'
            });
var format_5Acessosdutoviariosexternos_58 = new ol.format.GeoJSON();
var features_5Acessosdutoviariosexternos_58 = format_5Acessosdutoviariosexternos_58.readFeatures(json_5Acessosdutoviariosexternos_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5Acessosdutoviariosexternos_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5Acessosdutoviariosexternos_58.addFeatures(features_5Acessosdutoviariosexternos_58);
var lyr_5Acessosdutoviariosexternos_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5Acessosdutoviariosexternos_58, 
                style: style_5Acessosdutoviariosexternos_58,
                popuplayertitle: "5. Acessos dutoviarios externos",
                interactive: true,
                title: '<img src="styles/legend/5Acessosdutoviariosexternos_58.png" /> 5. Acessos dutoviarios externos'
            });
var format_4Acessoshidroviariosexternos_59 = new ol.format.GeoJSON();
var features_4Acessoshidroviariosexternos_59 = format_4Acessoshidroviariosexternos_59.readFeatures(json_4Acessoshidroviariosexternos_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Acessoshidroviariosexternos_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Acessoshidroviariosexternos_59.addFeatures(features_4Acessoshidroviariosexternos_59);
var lyr_4Acessoshidroviariosexternos_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4Acessoshidroviariosexternos_59, 
                style: style_4Acessoshidroviariosexternos_59,
                popuplayertitle: "4. Acessos hidroviarios externos",
                interactive: true,
                title: '<img src="styles/legend/4Acessoshidroviariosexternos_59.png" /> 4. Acessos hidroviarios externos'
            });
var format_3Acessosferroviariosexternos_60 = new ol.format.GeoJSON();
var features_3Acessosferroviariosexternos_60 = format_3Acessosferroviariosexternos_60.readFeatures(json_3Acessosferroviariosexternos_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3Acessosferroviariosexternos_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3Acessosferroviariosexternos_60.addFeatures(features_3Acessosferroviariosexternos_60);
var lyr_3Acessosferroviariosexternos_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3Acessosferroviariosexternos_60, 
                style: style_3Acessosferroviariosexternos_60,
                popuplayertitle: "3. Acessos ferroviarios externos",
                interactive: true,
                title: '<img src="styles/legend/3Acessosferroviariosexternos_60.png" /> 3. Acessos ferroviarios externos'
            });
var format_2Acessosrodoviariosexternos_61 = new ol.format.GeoJSON();
var features_2Acessosrodoviariosexternos_61 = format_2Acessosrodoviariosexternos_61.readFeatures(json_2Acessosrodoviariosexternos_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Acessosrodoviariosexternos_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Acessosrodoviariosexternos_61.addFeatures(features_2Acessosrodoviariosexternos_61);
var lyr_2Acessosrodoviariosexternos_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2Acessosrodoviariosexternos_61, 
                style: style_2Acessosrodoviariosexternos_61,
                popuplayertitle: "2. Acessos rodoviarios externos",
                interactive: true,
                title: '<img src="styles/legend/2Acessosrodoviariosexternos_61.png" /> 2. Acessos rodoviarios externos'
            });
var group_PortoOrganizadodoRioGrande = new ol.layer.Group({
                                layers: [lyr_1Poligonaldaareadoportoorganizado_39,lyr_23Unidadesdeconservacao_40,lyr_22Areasurbanaserurais_41,lyr_20Acostagematual_42,lyr_19Armazenagematual_43,lyr_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44,lyr_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45,lyr_16Areasnaoafetasasoperacoesportuariasatual_46,lyr_15Areaseinstalacoesalfandegadas_47,lyr_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48,lyr_123Areasafetasasoperacoesportuariasdeusopublicoatual_49,lyr_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50,lyr_121Areasafetasasoperacoesportuariasarrendadasatual_51,lyr_11Areasafetasasoperacoesportuariasatual_52,lyr_8Fundeadourosatual_53,lyr_7Baciasdeevolucaoatual_54,lyr_10Acessosferroviariosinternosatual_55,lyr_9Acessosrodoviariosinternosatual_56,lyr_6Canaisdeacessoatual_57,lyr_5Acessosdutoviariosexternos_58,lyr_4Acessoshidroviariosexternos_59,lyr_3Acessosferroviariosexternos_60,lyr_2Acessosrodoviariosexternos_61,],
                                fold: "open",
                                title: "Porto Organizado do Rio Grande"});
var group_PortoOrganizadodePelotas = new ol.layer.Group({
                                layers: [lyr_1PoligonalPortodePelotas_19,lyr_22reasUrbanaseRurais_20,lyr_20AcostagemAtual_21,lyr_19ArmazenagemAtual_22,lyr_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23,lyr_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24,lyr_16reasNoAfetassOperaesPorturiasAtual_25,lyr_15reaseInstalaesAlfandegadasdoPorto_26,lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27,lyr_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28,lyr_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29,lyr_121reasAfetassOperaesPorturiasArrendadasAtual_30,lyr_11reasAfetassOperaesPorturiasAtual_31,lyr_8FUNDEADOUROSATUAL_32,lyr_7BACIADEEVOLUOATUAL_33,lyr_6CANALDEACESSOATUAL_34,lyr_9ACESSOSRODOVIRIOSINTERNOSATUAL_35,lyr_4AcessosHidroviriosExternos_36,lyr_3AcessosFerroviriosExternos_37,lyr_2ACESSOSRODOVIRIOSEXTERNOS_38,],
                                fold: "open",
                                title: "Porto Organizado de Pelotas"});
var group_PortoOrganizadodePortoAlegre = new ol.layer.Group({
                                layers: [lyr_1PoligonaldareadoPortoOrganizado_1,lyr_20AcostagemAtual_2,lyr_19ArmazenagemAtual_3,lyr_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4,lyr_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5,lyr_16reasNoAfetassOperaesPorturiasAtual_6,lyr_15reaseInstalaesAlfandegadasdoPorto_7,lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8,lyr_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9,lyr_121reasAfetassOperaesPorturiasArrendadasAtual_10,lyr_11reasAfetassOperaesPorturiasAtual_11,lyr_8FundeadourosAtual_12,lyr_7BaciasdeEvoluoAtual_13,lyr_6CanaldeAcessoAtual_14,lyr_9AcessosRodoviriosInternosAtual_15,lyr_4AcessosHidroviriosExternos_16,lyr_3AcessosFerroviriosExternos_17,lyr_2AcessosRodoviriosExternos_18,],
                                fold: "open",
                                title: "Porto Organizado de Porto Alegre"});

lyr_GoogleSatellite_0.setVisible(true);lyr_1PoligonaldareadoPortoOrganizado_1.setVisible(true);lyr_20AcostagemAtual_2.setVisible(true);lyr_19ArmazenagemAtual_3.setVisible(true);lyr_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4.setVisible(true);lyr_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5.setVisible(true);lyr_16reasNoAfetassOperaesPorturiasAtual_6.setVisible(true);lyr_15reaseInstalaesAlfandegadasdoPorto_7.setVisible(true);lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8.setVisible(true);lyr_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9.setVisible(true);lyr_121reasAfetassOperaesPorturiasArrendadasAtual_10.setVisible(true);lyr_11reasAfetassOperaesPorturiasAtual_11.setVisible(true);lyr_8FundeadourosAtual_12.setVisible(true);lyr_7BaciasdeEvoluoAtual_13.setVisible(true);lyr_6CanaldeAcessoAtual_14.setVisible(true);lyr_9AcessosRodoviriosInternosAtual_15.setVisible(true);lyr_4AcessosHidroviriosExternos_16.setVisible(true);lyr_3AcessosFerroviriosExternos_17.setVisible(true);lyr_2AcessosRodoviriosExternos_18.setVisible(true);lyr_1PoligonalPortodePelotas_19.setVisible(true);lyr_22reasUrbanaseRurais_20.setVisible(true);lyr_20AcostagemAtual_21.setVisible(true);lyr_19ArmazenagemAtual_22.setVisible(true);lyr_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23.setVisible(true);lyr_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24.setVisible(true);lyr_16reasNoAfetassOperaesPorturiasAtual_25.setVisible(true);lyr_15reaseInstalaesAlfandegadasdoPorto_26.setVisible(true);lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27.setVisible(true);lyr_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28.setVisible(true);lyr_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29.setVisible(true);lyr_121reasAfetassOperaesPorturiasArrendadasAtual_30.setVisible(true);lyr_11reasAfetassOperaesPorturiasAtual_31.setVisible(true);lyr_8FUNDEADOUROSATUAL_32.setVisible(true);lyr_7BACIADEEVOLUOATUAL_33.setVisible(true);lyr_6CANALDEACESSOATUAL_34.setVisible(true);lyr_9ACESSOSRODOVIRIOSINTERNOSATUAL_35.setVisible(true);lyr_4AcessosHidroviriosExternos_36.setVisible(true);lyr_3AcessosFerroviriosExternos_37.setVisible(true);lyr_2ACESSOSRODOVIRIOSEXTERNOS_38.setVisible(true);lyr_1Poligonaldaareadoportoorganizado_39.setVisible(true);lyr_23Unidadesdeconservacao_40.setVisible(true);lyr_22Areasurbanaserurais_41.setVisible(true);lyr_20Acostagematual_42.setVisible(true);lyr_19Armazenagematual_43.setVisible(true);lyr_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44.setVisible(true);lyr_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45.setVisible(true);lyr_16Areasnaoafetasasoperacoesportuariasatual_46.setVisible(true);lyr_15Areaseinstalacoesalfandegadas_47.setVisible(true);lyr_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48.setVisible(true);lyr_123Areasafetasasoperacoesportuariasdeusopublicoatual_49.setVisible(true);lyr_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50.setVisible(true);lyr_121Areasafetasasoperacoesportuariasarrendadasatual_51.setVisible(true);lyr_11Areasafetasasoperacoesportuariasatual_52.setVisible(true);lyr_8Fundeadourosatual_53.setVisible(true);lyr_7Baciasdeevolucaoatual_54.setVisible(true);lyr_10Acessosferroviariosinternosatual_55.setVisible(true);lyr_9Acessosrodoviariosinternosatual_56.setVisible(true);lyr_6Canaisdeacessoatual_57.setVisible(true);lyr_5Acessosdutoviariosexternos_58.setVisible(true);lyr_4Acessoshidroviariosexternos_59.setVisible(true);lyr_3Acessosferroviariosexternos_60.setVisible(true);lyr_2Acessosrodoviariosexternos_61.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_PortoOrganizadodePortoAlegre,group_PortoOrganizadodePelotas,group_PortoOrganizadodoRioGrande];
lyr_1PoligonaldareadoPortoOrganizado_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_20AcostagemAtual_2.set('fieldAliases', {'Id. Cais': 'Id. Cais', 'Id. Berço': 'Id. Berço', 'C. Const.': 'C. Const.', 'Comp. m': 'Comp. m', 'Profund. m': 'Profund. m', 'Calado': 'Calado', 'Per. Carga': 'Per. Carga', 'Cód. ber�': 'Cód. ber�', });
lyr_19ArmazenagemAtual_3.set('fieldAliases', {'Nome': 'Nome', 'Capac. (t)': 'Capac. (t)', 'Área m²': 'Área m²', 'Volume m³': 'Volume m³', 'T. Instal.': 'T. Instal.', });
lyr_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4.set('fieldAliases', {'Nome': 'Nome', 'Nº da ar': 'Nº da ar', 'Área m²': 'Área m²', 'T. Explo.': 'T. Explo.', 'Util. áre': 'Util. áre', });
lyr_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'T. Cessão', 'Respons.': 'Respons.', 'Área': 'Área', 'D. Inicio': 'D. Inicio', 'D. Term.': 'D. Term.', 'A. Desenv.': 'A. Desenv.', 'Nº da ar': 'Nº da ar', 'Contrato': 'Contrato', });
lyr_16reasNoAfetassOperaesPorturiasAtual_6.set('fieldAliases', {'Nome': 'Nome', 'Nº da ar': 'Nº da ar', 'Dest.': 'Dest.', 'Área m²': 'Área m²', });
lyr_15reaseInstalaesAlfandegadasdoPorto_7.set('fieldAliases', {'Marco Lega': 'Marco Lega', });
lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8.set('fieldAliases', {'Nome': 'Nome', 'Nome_': 'Nome_', 'Perfil': 'Perfil', 'Área m²': 'Área m²', });
lyr_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil', 'T. Instal.': 'T. Instal.', 'Área': 'Área', 'Ident.': 'Ident.', });
lyr_121reasAfetassOperaesPorturiasArrendadasAtual_10.set('fieldAliases', {'Arrend.': 'Arrend.', 'Nº Cont.': 'Nº Cont.', 'D. Inicio': 'D. Inicio', 'D. Term.': 'D. Term.', 'P. Prorrog': 'P. Prorrog', 'Perfil': 'Perfil', 'Área': 'Área', 'Nome': 'Nome', });
lyr_11reasAfetassOperaesPorturiasAtual_11.set('fieldAliases', {'Nome_': 'Nome_', 'Perfil': 'Perfil', 'T. Inst.': 'T. Inst.', 'Área m²': 'Área m²', 'Nome/Ident': 'Nome/Ident', });
lyr_8FundeadourosAtual_12.set('fieldAliases', {'NOME': 'NOME', 'FUNÇÃO': 'FUNÇÃO', 'N. Ident.': 'N. Ident.', 'Calado': 'Calado', });
lyr_7BaciasdeEvoluoAtual_13.set('fieldAliases', {'Nome': 'Nome', 'FUNÇÃO': 'FUNÇÃO', 'Calado': 'Calado', });
lyr_6CanaldeAcessoAtual_14.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado', });
lyr_9AcessosRodoviriosInternosAtual_15.set('fieldAliases', {'NOME': 'NOME', 'Ident.': 'Ident.', 'Nº  Pista': 'Nº  Pista', });
lyr_4AcessosHidroviriosExternos_16.set('fieldAliases', {'Nome_': 'Nome_', 'Calado': 'Calado', 'Atual.': 'Atual.', });
lyr_3AcessosFerroviriosExternos_17.set('fieldAliases', {'LINHA': 'LINHA', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descricao', });
lyr_2AcessosRodoviriosExternos_18.set('fieldAliases', {'Nome': 'Nome', 'SIGLA': 'SIGLA', 'Jurisdicao': 'Jurisdicao', });
lyr_1PoligonalPortodePelotas_19.set('fieldAliases', {'Ins. Legal': 'Ins. Legal', 'Anexo': 'Anexo', 'Nome': 'Nome', });
lyr_22reasUrbanaseRurais_20.set('fieldAliases', {'cod_distri': 'cod_distri', 'Nome': 'Nome', 'area2': 'area2', 'Nome_leg': 'Nome_leg', 'Tipo': 'Tipo', 'Ins. Legal': 'Ins. Legal', 'Área': 'Área', });
lyr_20AcostagemAtual_21.set('fieldAliases', {'Id. Cais': 'Id. Cais', 'Id. Berço': 'Id. Berço', 'C. Const.': 'C. Const.', 'Comp.': 'Comp.', 'Profund.': 'Profund.', 'Calado': 'Calado', 'Per. Carga': 'Per. Carga', });
lyr_19ArmazenagemAtual_22.set('fieldAliases', {'T. Instal.': 'T. Instal.', 'Capacidade': 'Capacidade', 'Área': 'Área', 'Volume': 'Volume', 'Nome': 'Nome', });
lyr_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23.set('fieldAliases', {'Nº Área': 'Nº Área', 'Nome': 'Nome', 'Destinacao': 'Destinacao', 'Área': 'Área', });
lyr_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24.set('fieldAliases', {'Nº Área': 'Nº Área', 'Nome': 'Nome', 'T. Cessão': 'T. Cessão', 'Respons.': 'Respons.', 'Área': 'Área', 'D. Inicio': 'D. Inicio', 'D. Term.': 'D. Term.', 'A. Desenv.': 'A. Desenv.', });
lyr_16reasNoAfetassOperaesPorturiasAtual_25.set('fieldAliases', {'Nº Área': 'Nº Área', 'Nome': 'Nome', 'Destinacao': 'Destinacao', 'Área': 'Área', });
lyr_15reaseInstalaesAlfandegadasdoPorto_26.set('fieldAliases', {'Inst.Legal': 'Inst.Legal', });
lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27.set('fieldAliases', {'Nº Área': 'Nº Área', 'Nome': 'Nome', 'Área': 'Área', 'Perfil': 'Perfil', });
lyr_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrend.', 'Nº Cont.': 'Nº Cont.', 'D. Inicio': 'D. Inicio', 'D. Term.': 'D. Term.', 'P. Prorrog': 'P. Prorrog', 'Perfil': 'Perfil', 'Área': 'Área', });
lyr_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrend.', 'Nº Cont.': 'Nº Cont.', 'D. Inicio': 'D. Inicio', 'D. Term.': 'D. Term.', 'P.Prorrog.': 'P.Prorrog.', 'Perfil': 'Perfil', 'Área': 'Área', });
lyr_121reasAfetassOperaesPorturiasArrendadasAtual_30.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrend.', 'Nº Cont.': 'Nº Cont.', 'D. Inicio': 'D. Inicio', 'D. Term.': 'D. Term.', 'P.Prorrog.': 'P.Prorrog.', 'Perfil': 'Perfil', 'Área': 'Área', });
lyr_11reasAfetassOperaesPorturiasAtual_31.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área', 'Perfil': 'Perfil', 'T. Instal.': 'T. Instal.', 'Nº Área': 'Nº Área', });
lyr_8FUNDEADOUROSATUAL_32.set('fieldAliases', {'N. Ident.': 'N. Ident.', 'Função': 'Função', 'Calado': 'Calado', });
lyr_7BACIADEEVOLUOATUAL_33.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado', });
lyr_6CANALDEACESSOATUAL_34.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado', });
lyr_9ACESSOSRODOVIRIOSINTERNOSATUAL_35.set('fieldAliases', {'Ident.': 'Ident.', 'Nº Pistas': 'Nº Pistas', });
lyr_4AcessosHidroviriosExternos_36.set('fieldAliases', {'Nome': 'Nome', 'Calado': 'Calado', 'Atual.': 'Atual.', });
lyr_3AcessosFerroviriosExternos_37.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descricao', });
lyr_2ACESSOSRODOVIRIOSEXTERNOS_38.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdicao', });
lyr_1Poligonaldaareadoportoorganizado_39.set('fieldAliases', {'Ins. Legal': 'Ins. Legal', 'Anexo': 'Anexo', });
lyr_23Unidadesdeconservacao_40.set('fieldAliases', {'Nome': 'Nome', 'Ins. Legal': 'Ins. Legal', 'Area (m²)': 'Area (m²)', 'Observacao': 'Observacao', });
lyr_22Areasurbanaserurais_41.set('fieldAliases', {'Tipo': 'Tipo', 'Inst Legal': 'Inst Legal', 'Area': 'Area', });
lyr_20Acostagematual_42.set('fieldAliases', {'Id. Cais': 'Id. Cais', 'Id. Berco': 'Id. Berco', 'C. Const.': 'C. Const.', 'Comp. (m)': 'Comp. (m)', 'Profund(m)': 'Profund(m)', 'Calado (m)': 'Calado (m)', 'Per. Carga': 'Per. Carga', 'Observ.1': 'Observ.1', 'Observ.2': 'Observ.2', 'Observ.3': 'Observ.3', });
lyr_19Armazenagematual_43.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'T. Instal.', 'Capacidade': 'Capacidade', 'Vol. (m³)': 'Vol. (m³)', 'Area (m²)': 'Area (m²)', 'Observ.': 'Observ.', });
lyr_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44.set('fieldAliases', {'N° Area': 'N° Area', 'Nome': 'Nome', 'T. Explo.': 'T. Explo.', 'Util Atual': 'Util Atual', 'Area (m²)': 'Area (m²)', });
lyr_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45.set('fieldAliases', {'N° Area': 'N° Area', 'Nome': 'Nome', 'T. Cessao': 'T. Cessao', 'Respons.': 'Respons.', 'N° Cont.': 'N° Cont.', 'D. Inicio': 'D. Inicio', 'D. Term.': 'D. Term.', 'D. Term.*': 'D. Term.*', 'A. Desenv.': 'A. Desenv.', 'Area (m²)': 'Area (m²)', 'Observ.1': 'Observ.1', 'Observ.2': 'Observ.2', });
lyr_16Areasnaoafetasasoperacoesportuariasatual_46.set('fieldAliases', {'N° Area': 'N° Area', 'Nome': 'Nome', 'Destinacao': 'Destinacao', 'Area (m²)': 'Area (m²)', 'Observ.': 'Observ.', });
lyr_15Areaseinstalacoesalfandegadas_47.set('fieldAliases', {'Nome': 'Nome', 'Ins. Legal': 'Ins. Legal', 'Observ.': 'Observ.', });
lyr_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48.set('fieldAliases', {'N° Area': 'N° Area', 'Nome': 'Nome', 'Perfil': 'Perfil', 'Area (m²)': 'Area (m²)', 'Observ.1': 'Observ.1', 'Observ.2': 'Observ.2', });
lyr_123Areasafetasasoperacoesportuariasdeusopublicoatual_49.set('fieldAliases', {'N° Area': 'N° Area', 'Nome': 'Nome', 'Perfil': 'Perfil', 'Area (m²)': 'Area (m²)', });
lyr_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50.set('fieldAliases', {'N° Area': 'N° Area', 'Arrend.': 'Arrend.', 'N° Cont.': 'N° Cont.', 'D. Inicio': 'D. Inicio', 'D. Term.': 'D. Term.', 'P. Prorrog': 'P. Prorrog', 'Perfil': 'Perfil', 'Area (m²)': 'Area (m²)', });
lyr_121Areasafetasasoperacoesportuariasarrendadasatual_51.set('fieldAliases', {'N° Area': 'N° Area', 'Arrend.': 'Arrend.', 'N° Cont.': 'N° Cont.', 'D. Início': 'D. Início', 'D. Term.': 'D. Term.', 'P. Prorrog': 'P. Prorrog', 'Perfil': 'Perfil', 'Area (m²)': 'Area (m²)', 'Observ.': 'Observ.', });
lyr_11Areasafetasasoperacoesportuariasatual_52.set('fieldAliases', {'N° Area': 'N° Area', 'Nome': 'Nome', 'Perfil': 'Perfil', 'T. Instal.': 'T. Instal.', 'Area (m²)': 'Area (m²)', 'Observ.': 'Observ.', 'area calcm': 'area calcm', });
lyr_8Fundeadourosatual_53.set('fieldAliases', {'Ident.': 'Ident.', 'Funcao': 'Funcao', 'Calado (m)': 'Calado (m)', 'Observ.': 'Observ.', });
lyr_7Baciasdeevolucaoatual_54.set('fieldAliases', {'Nome': 'Nome', 'Função': 'Função', 'Calado (m)': 'Calado (m)', 'Observ.': 'Observ.', });
lyr_10Acessosferroviariosinternosatual_55.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_9Acessosrodoviariosinternosatual_56.set('fieldAliases', {'Ident.': 'Ident.', 'N° Pistas': 'N° Pistas', });
lyr_6Canaisdeacessoatual_57.set('fieldAliases', {'Trecho': 'Trecho', 'Calado (m)': 'Calado (m)', });
lyr_5Acessosdutoviariosexternos_58.set('fieldAliases', {'Nome': 'Nome', 'Mat. Trans': 'Mat. Trans', 'Posicao': 'Posicao', 'Operador': 'Operador', 'T. Duto': 'T. Duto', 'Observacao': 'Observacao', });
lyr_4Acessoshidroviariosexternos_59.set('fieldAliases', {'Nome': 'Nome', 'Calado(m)': 'Calado(m)', 'Atual.': 'Atual.', });
lyr_3Acessosferroviariosexternos_60.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descricao', });
lyr_2Acessosrodoviariosexternos_61.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdicao', });
lyr_1PoligonaldareadoPortoOrganizado_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_20AcostagemAtual_2.set('fieldImages', {'Id. Cais': '', 'Id. Berço': '', 'C. Const.': '', 'Comp. m': '', 'Profund. m': '', 'Calado': '', 'Per. Carga': '', 'Cód. ber�': '', });
lyr_19ArmazenagemAtual_3.set('fieldImages', {'Nome': '', 'Capac. (t)': '', 'Área m²': '', 'Volume m³': '', 'T. Instal.': '', });
lyr_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4.set('fieldImages', {'Nome': '', 'Nº da ar': '', 'Área m²': '', 'T. Explo.': '', 'Util. áre': '', });
lyr_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5.set('fieldImages', {'Nome': '', 'T. Cessão': '', 'Respons.': '', 'Área': '', 'D. Inicio': '', 'D. Term.': '', 'A. Desenv.': '', 'Nº da ar': '', 'Contrato': '', });
lyr_16reasNoAfetassOperaesPorturiasAtual_6.set('fieldImages', {'Nome': '', 'Nº da ar': '', 'Dest.': '', 'Área m²': '', });
lyr_15reaseInstalaesAlfandegadasdoPorto_7.set('fieldImages', {'Marco Lega': '', });
lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8.set('fieldImages', {'Nome': '', 'Nome_': '', 'Perfil': '', 'Área m²': '', });
lyr_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9.set('fieldImages', {'Nome': '', 'Perfil': '', 'T. Instal.': '', 'Área': '', 'Ident.': '', });
lyr_121reasAfetassOperaesPorturiasArrendadasAtual_10.set('fieldImages', {'Arrend.': '', 'Nº Cont.': '', 'D. Inicio': '', 'D. Term.': '', 'P. Prorrog': '', 'Perfil': '', 'Área': '', 'Nome': '', });
lyr_11reasAfetassOperaesPorturiasAtual_11.set('fieldImages', {'Nome_': '', 'Perfil': '', 'T. Inst.': '', 'Área m²': '', 'Nome/Ident': '', });
lyr_8FundeadourosAtual_12.set('fieldImages', {'NOME': '', 'FUNÇÃO': '', 'N. Ident.': '', 'Calado': '', });
lyr_7BaciasdeEvoluoAtual_13.set('fieldImages', {'Nome': '', 'FUNÇÃO': '', 'Calado': '', });
lyr_6CanaldeAcessoAtual_14.set('fieldImages', {'Trecho': '', 'Calado': '', });
lyr_9AcessosRodoviriosInternosAtual_15.set('fieldImages', {'NOME': '', 'Ident.': '', 'Nº  Pista': '', });
lyr_4AcessosHidroviriosExternos_16.set('fieldImages', {'Nome_': '', 'Calado': '', 'Atual.': '', });
lyr_3AcessosFerroviriosExternos_17.set('fieldImages', {'LINHA': '', 'Operador': '', 'Trecho': '', 'Descricao': '', });
lyr_2AcessosRodoviriosExternos_18.set('fieldImages', {'Nome': '', 'SIGLA': '', 'Jurisdicao': '', });
lyr_1PoligonalPortodePelotas_19.set('fieldImages', {'Ins. Legal': '', 'Anexo': '', 'Nome': '', });
lyr_22reasUrbanaseRurais_20.set('fieldImages', {'cod_distri': '', 'Nome': '', 'area2': '', 'Nome_leg': '', 'Tipo': '', 'Ins. Legal': '', 'Área': '', });
lyr_20AcostagemAtual_21.set('fieldImages', {'Id. Cais': '', 'Id. Berço': '', 'C. Const.': '', 'Comp.': '', 'Profund.': '', 'Calado': '', 'Per. Carga': '', });
lyr_19ArmazenagemAtual_22.set('fieldImages', {'T. Instal.': '', 'Capacidade': '', 'Área': '', 'Volume': '', 'Nome': '', });
lyr_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23.set('fieldImages', {'Nº Área': '', 'Nome': '', 'Destinacao': '', 'Área': '', });
lyr_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24.set('fieldImages', {'Nº Área': '', 'Nome': '', 'T. Cessão': '', 'Respons.': '', 'Área': '', 'D. Inicio': '', 'D. Term.': '', 'A. Desenv.': '', });
lyr_16reasNoAfetassOperaesPorturiasAtual_25.set('fieldImages', {'Nº Área': '', 'Nome': '', 'Destinacao': '', 'Área': '', });
lyr_15reaseInstalaesAlfandegadasdoPorto_26.set('fieldImages', {'Inst.Legal': '', });
lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27.set('fieldImages', {'Nº Área': '', 'Nome': '', 'Área': '', 'Perfil': '', });
lyr_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28.set('fieldImages', {'Nome': '', 'Arrend.': '', 'Nº Cont.': '', 'D. Inicio': '', 'D. Term.': '', 'P. Prorrog': '', 'Perfil': '', 'Área': '', });
lyr_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29.set('fieldImages', {'Nome': '', 'Arrend.': '', 'Nº Cont.': '', 'D. Inicio': '', 'D. Term.': '', 'P.Prorrog.': '', 'Perfil': '', 'Área': '', });
lyr_121reasAfetassOperaesPorturiasArrendadasAtual_30.set('fieldImages', {'Nome': '', 'Arrend.': '', 'Nº Cont.': '', 'D. Inicio': '', 'D. Term.': '', 'P.Prorrog.': '', 'Perfil': '', 'Área': '', });
lyr_11reasAfetassOperaesPorturiasAtual_31.set('fieldImages', {'Nome': '', 'Área': '', 'Perfil': '', 'T. Instal.': '', 'Nº Área': '', });
lyr_8FUNDEADOUROSATUAL_32.set('fieldImages', {'N. Ident.': '', 'Função': '', 'Calado': '', });
lyr_7BACIADEEVOLUOATUAL_33.set('fieldImages', {'Função': '', 'Calado': '', });
lyr_6CANALDEACESSOATUAL_34.set('fieldImages', {'Trecho': '', 'Calado': '', });
lyr_9ACESSOSRODOVIRIOSINTERNOSATUAL_35.set('fieldImages', {'Ident.': '', 'Nº Pistas': '', });
lyr_4AcessosHidroviriosExternos_36.set('fieldImages', {'Nome': '', 'Calado': '', 'Atual.': '', });
lyr_3AcessosFerroviriosExternos_37.set('fieldImages', {'Linha': '', 'Operador': '', 'Trecho': '', 'Descricao': '', });
lyr_2ACESSOSRODOVIRIOSEXTERNOS_38.set('fieldImages', {'Nome': '', 'Sigla': '', 'Jurisdicao': '', });
lyr_1Poligonaldaareadoportoorganizado_39.set('fieldImages', {'Ins. Legal': '', 'Anexo': '', });
lyr_23Unidadesdeconservacao_40.set('fieldImages', {'Nome': 'TextEdit', 'Ins. Legal': 'TextEdit', 'Area (m²)': '', 'Observacao': 'TextEdit', });
lyr_22Areasurbanaserurais_41.set('fieldImages', {'Tipo': '', 'Inst Legal': '', 'Area': '', });
lyr_20Acostagematual_42.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. (m)': 'TextEdit', 'Profund(m)': 'TextEdit', 'Calado (m)': 'TextEdit', 'Per. Carga': 'TextEdit', 'Observ.1': 'TextEdit', 'Observ.2': 'TextEdit', 'Observ.3': 'TextEdit', });
lyr_19Armazenagematual_43.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Vol. (m³)': 'TextEdit', 'Area (m²)': 'TextEdit', 'Observ.': 'TextEdit', });
lyr_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44.set('fieldImages', {'N° Area': 'TextEdit', 'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util Atual': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45.set('fieldImages', {'N° Area': 'TextEdit', 'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'D. Term.*': 'TextEdit', 'A. Desenv.': 'TextEdit', 'Area (m²)': 'TextEdit', 'Observ.1': 'TextEdit', 'Observ.2': 'TextEdit', });
lyr_16Areasnaoafetasasoperacoesportuariasatual_46.set('fieldImages', {'N° Area': 'TextEdit', 'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area (m²)': 'TextEdit', 'Observ.': 'TextEdit', });
lyr_15Areaseinstalacoesalfandegadas_47.set('fieldImages', {'Nome': '', 'Ins. Legal': '', 'Observ.': '', });
lyr_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48.set('fieldImages', {'N° Area': 'TextEdit', 'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', 'Observ.1': 'TextEdit', 'Observ.2': 'TextEdit', });
lyr_123Areasafetasasoperacoesportuariasdeusopublicoatual_49.set('fieldImages', {'N° Area': 'TextEdit', 'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50.set('fieldImages', {'N° Area': 'TextEdit', 'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_121Areasafetasasoperacoesportuariasarrendadasatual_51.set('fieldImages', {'N° Area': 'TextEdit', 'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', 'Observ.': 'TextEdit', });
lyr_11Areasafetasasoperacoesportuariasatual_52.set('fieldImages', {'N° Area': 'TextEdit', 'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Area (m²)': 'TextEdit', 'Observ.': 'TextEdit', 'area calcm': '', });
lyr_8Fundeadourosatual_53.set('fieldImages', {'Ident.': '', 'Funcao': '', 'Calado (m)': '', 'Observ.': '', });
lyr_7Baciasdeevolucaoatual_54.set('fieldImages', {'Nome': 'TextEdit', 'Função': 'TextEdit', 'Calado (m)': 'TextEdit', 'Observ.': 'TextEdit', });
lyr_10Acessosferroviariosinternosatual_55.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_9Acessosrodoviariosinternosatual_56.set('fieldImages', {'Ident.': 'TextEdit', 'N° Pistas': 'Range', });
lyr_6Canaisdeacessoatual_57.set('fieldImages', {'Trecho': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_5Acessosdutoviariosexternos_58.set('fieldImages', {'Nome': '', 'Mat. Trans': '', 'Posicao': '', 'Operador': '', 'T. Duto': '', 'Observacao': '', });
lyr_4Acessoshidroviariosexternos_59.set('fieldImages', {'Nome': 'TextEdit', 'Calado(m)': 'TextEdit', 'Atual.': 'TextEdit', });
lyr_3Acessosferroviariosexternos_60.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_2Acessosrodoviariosexternos_61.set('fieldImages', {'Nome': '', 'Sigla': '', 'Jurisdicao': '', });
lyr_1PoligonaldareadoPortoOrganizado_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_20AcostagemAtual_2.set('fieldLabels', {'Id. Cais': 'no label', 'Id. Berço': 'no label', 'C. Const.': 'no label', 'Comp. m': 'no label', 'Profund. m': 'no label', 'Calado': 'no label', 'Per. Carga': 'no label', 'Cód. ber�': 'no label', });
lyr_19ArmazenagemAtual_3.set('fieldLabels', {'Nome': 'no label', 'Capac. (t)': 'no label', 'Área m²': 'no label', 'Volume m³': 'no label', 'T. Instal.': 'no label', });
lyr_18reasNoAfetassAtividadesPorturiasDisponveisemExploraoIndiretaAtual_4.set('fieldLabels', {'Nome': 'no label', 'Nº da ar': 'no label', 'Área m²': 'no label', 'T. Explo.': 'no label', 'Util. áre': 'no label', });
lyr_17reasNoAfetassAtividadesPorturiasemExploraoIndiretaAtual_5.set('fieldLabels', {'Nome': 'no label', 'T. Cessão': 'no label', 'Respons.': 'no label', 'Área': 'no label', 'D. Inicio': 'no label', 'D. Term.': 'no label', 'A. Desenv.': 'no label', 'Nº da ar': 'no label', 'Contrato': 'no label', });
lyr_16reasNoAfetassOperaesPorturiasAtual_6.set('fieldLabels', {'Nome': 'no label', 'Nº da ar': 'no label', 'Dest.': 'no label', 'Área m²': 'no label', });
lyr_15reaseInstalaesAlfandegadasdoPorto_7.set('fieldLabels', {'Marco Lega': 'no label', });
lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_8.set('fieldLabels', {'Nome': 'no label', 'Nome_': 'no label', 'Perfil': 'no label', 'Área m²': 'no label', });
lyr_123reasAfetassAtividadesPorturiasdeUsoPblicoAtual_9.set('fieldLabels', {'Nome': 'no label', 'Perfil': 'no label', 'T. Instal.': 'no label', 'Área': 'no label', 'Ident.': 'no label', });
lyr_121reasAfetassOperaesPorturiasArrendadasAtual_10.set('fieldLabels', {'Arrend.': 'no label', 'Nº Cont.': 'no label', 'D. Inicio': 'no label', 'D. Term.': 'no label', 'P. Prorrog': 'no label', 'Perfil': 'no label', 'Área': 'no label', 'Nome': 'no label', });
lyr_11reasAfetassOperaesPorturiasAtual_11.set('fieldLabels', {'Nome_': 'no label', 'Perfil': 'no label', 'T. Inst.': 'no label', 'Área m²': 'no label', 'Nome/Ident': 'no label', });
lyr_8FundeadourosAtual_12.set('fieldLabels', {'NOME': 'no label', 'FUNÇÃO': 'no label', 'N. Ident.': 'no label', 'Calado': 'no label', });
lyr_7BaciasdeEvoluoAtual_13.set('fieldLabels', {'Nome': 'no label', 'FUNÇÃO': 'no label', 'Calado': 'no label', });
lyr_6CanaldeAcessoAtual_14.set('fieldLabels', {'Trecho': 'no label', 'Calado': 'no label', });
lyr_9AcessosRodoviriosInternosAtual_15.set('fieldLabels', {'NOME': 'no label', 'Ident.': 'no label', 'Nº  Pista': 'no label', });
lyr_4AcessosHidroviriosExternos_16.set('fieldLabels', {'Nome_': 'no label', 'Calado': 'no label', 'Atual.': 'no label', });
lyr_3AcessosFerroviriosExternos_17.set('fieldLabels', {'LINHA': 'no label', 'Operador': 'no label', 'Trecho': 'no label', 'Descricao': 'no label', });
lyr_2AcessosRodoviriosExternos_18.set('fieldLabels', {'Nome': 'no label', 'SIGLA': 'no label', 'Jurisdicao': 'no label', });
lyr_1PoligonalPortodePelotas_19.set('fieldLabels', {'Ins. Legal': 'no label', 'Anexo': 'no label', 'Nome': 'no label', });
lyr_22reasUrbanaseRurais_20.set('fieldLabels', {'cod_distri': 'no label', 'Nome': 'no label', 'area2': 'no label', 'Nome_leg': 'no label', 'Tipo': 'no label', 'Ins. Legal': 'no label', 'Área': 'no label', });
lyr_20AcostagemAtual_21.set('fieldLabels', {'Id. Cais': 'no label', 'Id. Berço': 'no label', 'C. Const.': 'no label', 'Comp.': 'no label', 'Profund.': 'no label', 'Calado': 'no label', 'Per. Carga': 'no label', });
lyr_19ArmazenagemAtual_22.set('fieldLabels', {'T. Instal.': 'no label', 'Capacidade': 'no label', 'Área': 'no label', 'Volume': 'no label', 'Nome': 'no label', });
lyr_18reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaAtual_23.set('fieldLabels', {'Nº Área': 'no label', 'Nome': 'no label', 'Destinacao': 'no label', 'Área': 'no label', });
lyr_17reasNoAfetassOperaesPorturiasemExploraoIndiretaAtual_24.set('fieldLabels', {'Nº Área': 'no label', 'Nome': 'no label', 'T. Cessão': 'no label', 'Respons.': 'no label', 'Área': 'no label', 'D. Inicio': 'no label', 'D. Term.': 'no label', 'A. Desenv.': 'no label', });
lyr_16reasNoAfetassOperaesPorturiasAtual_25.set('fieldLabels', {'Nº Área': 'no label', 'Nome': 'no label', 'Destinacao': 'no label', 'Área': 'no label', });
lyr_15reaseInstalaesAlfandegadasdoPorto_26.set('fieldLabels', {'Inst.Legal': 'no label', });
lyr_13reasAfetassOperaesPorturiasDisponveisparaArrendamentoAtual_27.set('fieldLabels', {'Nº Área': 'no label', 'Nome': 'no label', 'Área': 'no label', 'Perfil': 'no label', });
lyr_123reasAfetassOperaesPorturiasdeUsoPblicoAtual_28.set('fieldLabels', {'Nome': 'no label', 'Arrend.': 'no label', 'Nº Cont.': 'no label', 'D. Inicio': 'no label', 'D. Term.': 'no label', 'P. Prorrog': 'no label', 'Perfil': 'no label', 'Área': 'no label', });
lyr_122reasAfetassOperaesPorturiascomServidodePassagemAtual_29.set('fieldLabels', {'Nome': 'no label', 'Arrend.': 'no label', 'Nº Cont.': 'no label', 'D. Inicio': 'no label', 'D. Term.': 'no label', 'P.Prorrog.': 'no label', 'Perfil': 'no label', 'Área': 'no label', });
lyr_121reasAfetassOperaesPorturiasArrendadasAtual_30.set('fieldLabels', {'Nome': 'no label', 'Arrend.': 'no label', 'Nº Cont.': 'no label', 'D. Inicio': 'no label', 'D. Term.': 'no label', 'P.Prorrog.': 'no label', 'Perfil': 'no label', 'Área': 'no label', });
lyr_11reasAfetassOperaesPorturiasAtual_31.set('fieldLabels', {'Nome': 'no label', 'Área': 'no label', 'Perfil': 'no label', 'T. Instal.': 'no label', 'Nº Área': 'no label', });
lyr_8FUNDEADOUROSATUAL_32.set('fieldLabels', {'N. Ident.': 'no label', 'Função': 'no label', 'Calado': 'no label', });
lyr_7BACIADEEVOLUOATUAL_33.set('fieldLabels', {'Função': 'no label', 'Calado': 'no label', });
lyr_6CANALDEACESSOATUAL_34.set('fieldLabels', {'Trecho': 'no label', 'Calado': 'no label', });
lyr_9ACESSOSRODOVIRIOSINTERNOSATUAL_35.set('fieldLabels', {'Ident.': 'no label', 'Nº Pistas': 'no label', });
lyr_4AcessosHidroviriosExternos_36.set('fieldLabels', {'Nome': 'no label', 'Calado': 'no label', 'Atual.': 'no label', });
lyr_3AcessosFerroviriosExternos_37.set('fieldLabels', {'Linha': 'no label', 'Operador': 'no label', 'Trecho': 'no label', 'Descricao': 'no label', });
lyr_2ACESSOSRODOVIRIOSEXTERNOS_38.set('fieldLabels', {'Nome': 'no label', 'Sigla': 'no label', 'Jurisdicao': 'no label', });
lyr_1Poligonaldaareadoportoorganizado_39.set('fieldLabels', {'Ins. Legal': 'no label', 'Anexo': 'no label', });
lyr_23Unidadesdeconservacao_40.set('fieldLabels', {'Nome': 'no label', 'Ins. Legal': 'no label', 'Area (m²)': 'no label', 'Observacao': 'no label', });
lyr_22Areasurbanaserurais_41.set('fieldLabels', {'Tipo': 'no label', 'Inst Legal': 'no label', 'Area': 'no label', });
lyr_20Acostagematual_42.set('fieldLabels', {'Id. Cais': 'no label', 'Id. Berco': 'no label', 'C. Const.': 'no label', 'Comp. (m)': 'no label', 'Profund(m)': 'no label', 'Calado (m)': 'no label', 'Per. Carga': 'no label', 'Observ.1': 'no label', 'Observ.2': 'no label', 'Observ.3': 'no label', });
lyr_19Armazenagematual_43.set('fieldLabels', {'Nome': 'no label', 'T. Instal.': 'no label', 'Capacidade': 'no label', 'Vol. (m³)': 'no label', 'Area (m²)': 'no label', 'Observ.': 'no label', });
lyr_18Areasnaoafetasasoperacoesportuariasdisponiveisparaexploracaoindiretaatual_44.set('fieldLabels', {'N° Area': 'no label', 'Nome': 'no label', 'T. Explo.': 'no label', 'Util Atual': 'no label', 'Area (m²)': 'no label', });
lyr_17Areasnaoafetasasoperacoesportuariasemexploracaoindiretaatual_45.set('fieldLabels', {'N° Area': 'no label', 'Nome': 'no label', 'T. Cessao': 'no label', 'Respons.': 'no label', 'N° Cont.': 'no label', 'D. Inicio': 'no label', 'D. Term.': 'no label', 'D. Term.*': 'no label', 'A. Desenv.': 'no label', 'Area (m²)': 'no label', 'Observ.1': 'no label', 'Observ.2': 'no label', });
lyr_16Areasnaoafetasasoperacoesportuariasatual_46.set('fieldLabels', {'N° Area': 'no label', 'Nome': 'no label', 'Destinacao': 'no label', 'Area (m²)': 'no label', 'Observ.': 'no label', });
lyr_15Areaseinstalacoesalfandegadas_47.set('fieldLabels', {'Nome': 'no label', 'Ins. Legal': 'no label', 'Observ.': 'no label', });
lyr_13Areasafetasasoperacoesportuariasdisponiveisparaarrendamentoatual_48.set('fieldLabels', {'N° Area': 'no label', 'Nome': 'no label', 'Perfil': 'no label', 'Area (m²)': 'no label', 'Observ.1': 'no label', 'Observ.2': 'no label', });
lyr_123Areasafetasasoperacoesportuariasdeusopublicoatual_49.set('fieldLabels', {'N° Area': 'no label', 'Nome': 'no label', 'Perfil': 'no label', 'Area (m²)': 'no label', });
lyr_122Areasafetasasoperacoesportuariascomservidaodepassagematual_50.set('fieldLabels', {'N° Area': 'no label', 'Arrend.': 'no label', 'N° Cont.': 'no label', 'D. Inicio': 'no label', 'D. Term.': 'no label', 'P. Prorrog': 'no label', 'Perfil': 'no label', 'Area (m²)': 'no label', });
lyr_121Areasafetasasoperacoesportuariasarrendadasatual_51.set('fieldLabels', {'N° Area': 'no label', 'Arrend.': 'no label', 'N° Cont.': 'no label', 'D. Início': 'no label', 'D. Term.': 'no label', 'P. Prorrog': 'no label', 'Perfil': 'no label', 'Area (m²)': 'no label', 'Observ.': 'no label', });
lyr_11Areasafetasasoperacoesportuariasatual_52.set('fieldLabels', {'N° Area': 'no label', 'Nome': 'no label', 'Perfil': 'no label', 'T. Instal.': 'no label', 'Area (m²)': 'no label', 'Observ.': 'no label', 'area calcm': 'no label', });
lyr_8Fundeadourosatual_53.set('fieldLabels', {'Ident.': 'no label', 'Funcao': 'no label', 'Calado (m)': 'no label', 'Observ.': 'no label', });
lyr_7Baciasdeevolucaoatual_54.set('fieldLabels', {'Nome': 'no label', 'Função': 'no label', 'Calado (m)': 'no label', 'Observ.': 'no label', });
lyr_10Acessosferroviariosinternosatual_55.set('fieldLabels', {'Nome': 'no label', 'Operador': 'no label', });
lyr_9Acessosrodoviariosinternosatual_56.set('fieldLabels', {'Ident.': 'no label', 'N° Pistas': 'no label', });
lyr_6Canaisdeacessoatual_57.set('fieldLabels', {'Trecho': 'no label', 'Calado (m)': 'no label', });
lyr_5Acessosdutoviariosexternos_58.set('fieldLabels', {'Nome': 'no label', 'Mat. Trans': 'no label', 'Posicao': 'no label', 'Operador': 'no label', 'T. Duto': 'no label', 'Observacao': 'no label', });
lyr_4Acessoshidroviariosexternos_59.set('fieldLabels', {'Nome': 'no label', 'Calado(m)': 'no label', 'Atual.': 'no label', });
lyr_3Acessosferroviariosexternos_60.set('fieldLabels', {'Linha': 'no label', 'Operador': 'no label', 'Trecho': 'no label', 'Descricao': 'no label', });
lyr_2Acessosrodoviariosexternos_61.set('fieldLabels', {'Nome': 'no label', 'Sigla': 'no label', 'Jurisdicao': 'no label', });
lyr_2Acessosrodoviariosexternos_61.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});