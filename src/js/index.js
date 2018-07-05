
const mapExtent = [107.67801200295162, 24.194967916636074, 115.29228722157802, 31.380940154664472]
const tileGrid = new ol.tilegrid.TileGrid({
    extent: ol.proj.transformExtent(mapExtent, 'EPSG:4326', 'EPSG:3857'),
    resolutions: [1],
    // resolutions: [0.014276766034981682, 0.011897305029151402, 0.00951784402332112, 0.0071383830174908411, 0.0059486525145757011, 0.00475892201166056, 0.0035691915087454206, 0.0029743262572878505, 0.00237946100583028, 0.0017845957543727103, 0.00118973050291514, 0.00059486525145757, 0.00023794610058302802],
    tileSize: [1024, 1024],
    origin: [-400, 400],
})
console.log(tileGrid)
// ol.coordinate.toStringXY()
const map = new ol.Map({
    target: 'map',
    layers: [
        // new ol.layer.Tile({
        //     source: new ol.source.OSM()
        // }),
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                attributions: 'TEST © ',
                // tileSize: [1024, 1024],
                // maxResolution: 0.014276766034981682,
                // minResolution: 0.00023794610058302802,
                tileUrlFunction: function () {
                    console.log(1)
                },
                url: '../src/image/{z}/{y}/{y}_{x}.PNG',
                // http://10.110.172.74/mapFile/hnmap/1/30/30_41.PNG
                // url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
                //     'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
                tileGrid: tileGrid
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.transform([111.51687, 27.38078], 'EPSG:4326', 'EPSG:3857'),
        zoom: 16
    })
});

// const mapExtent = [107.67801200295162, 24.194967916636074, 115.29228722157802, 31.380940154664472]
// const map = new ol.Map({
//     target: 'map',
//     layers: [
//         new ol.layer.Tile({
//             extent: ol.proj.transformExtent(mapExtent, 'EPSG:4326', 'EPSG:3857'),
//             source: new ol.source.XYZ({
//                 maxZoom: 16,
//                 attributions: 'TEST © ',
//                 // tileSize: [1024, 1024],
//                 // maxResolution: 0.014276766034981682,
//                 // minResolution: 0.00023794610058302802,
//                 tileUrlFunction: function() {
//                     console.log(arguments)
//                 },
//                 // url: '../src/image/{z}/{y}/{y}_{x}.PNG',
//                 // http://10.110.172.74/mapFile/hnmap/1/30/30_41.PNG
//                 // url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
//                 //     'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
//             })
//         })
//     ],
//     view: new ol.View({
//         projection: 'EPSG:3857',
//         center: ol.proj.transform([111.51687, 27.38078], 'EPSG:4326', 'EPSG:3857'),
//         zoom: 7
//     })
// });
