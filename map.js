const svgBlue = '<svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13.5C19 16.5376 16.5376 19 13.5 19C10.4624 19 8 16.5376 8 13.5C8 10.4624 10.4624 8 13.5 8C16.5376 8 19 10.4624 19 13.5Z" fill="white"/><path d="M13.3619 39.3378C13.2153 39.5682 13.0946 39.7565 13.0036 39.898C12.9126 39.7565 12.7919 39.5682 12.6452 39.3378C12.2905 38.7806 11.7835 37.9772 11.1752 36.9925C9.95834 35.023 8.33623 32.3293 6.71445 29.4318C5.09221 26.5334 3.47258 23.4351 2.25921 20.6553C1.04034 17.863 0.25 15.4322 0.25 13.8523C0.25 9.09195 1.87241 5.70244 4.2625 3.49961C6.6568 1.2929 9.84296 0.257417 13 0.250001C16.157 0.257417 19.3432 1.2929 21.7375 3.49961C24.1276 5.70244 25.75 9.09195 25.75 13.8523C25.75 15.4322 24.9601 17.863 23.7419 20.6554C22.5293 23.4351 20.9105 26.5335 19.2892 29.4318C17.6684 32.3294 16.0472 35.0231 14.831 36.9926C14.223 37.9772 13.7164 38.7807 13.3619 39.3378ZM13.0074 8.54761C10.379 8.54761 8.25114 10.6755 8.25114 13.3039C8.25114 15.932 10.3788 18.0601 13 18.0601C15.6278 18.0601 17.7637 15.9328 17.7637 13.3039C17.7637 10.6755 15.6358 8.54761 13.0074 8.54761Z" fill="#16AFD1" stroke="white" stroke-width="0.5"/></svg>';
const baseSvg = 'data:image/svg+xml;base64,' + btoa(svgBlue);

const svgDark = '<svg width="31.2" height="49.2" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13.5C19 16.5376 16.5376 19 13.5 19C10.4624 19 8 16.5376 8 13.5C8 10.4624 10.4624 8 13.5 8C16.5376 8 19 10.4624 19 13.5Z" fill="white"/><path d="M13.3619 39.3378C13.2153 39.5682 13.0946 39.7565 13.0036 39.898C12.9126 39.7565 12.7919 39.5682 12.6452 39.3378C12.2905 38.7806 11.7835 37.9772 11.1752 36.9925C9.95834 35.023 8.33623 32.3293 6.71445 29.4318C5.09221 26.5334 3.47258 23.4351 2.25921 20.6553C1.04034 17.863 0.25 15.4322 0.25 13.8523C0.25 9.09195 1.87241 5.70244 4.2625 3.49961C6.6568 1.2929 9.84296 0.257417 13 0.250001C16.157 0.257417 19.3432 1.2929 21.7375 3.49961C24.1276 5.70244 25.75 9.09195 25.75 13.8523C25.75 15.4322 24.9601 17.863 23.7419 20.6554C22.5293 23.4351 20.9105 26.5335 19.2892 29.4318C17.6684 32.3294 16.0472 35.0231 14.831 36.9926C14.223 37.9772 13.7164 38.7807 13.3619 39.3378ZM13.0074 8.54761C10.379 8.54761 8.25114 10.6755 8.25114 13.3039C8.25114 15.932 10.3788 18.0601 13 18.0601C15.6278 18.0601 17.7637 15.9328 17.7637 13.3039C17.7637 10.6755 15.6358 8.54761 13.0074 8.54761Z" fill="#307199" stroke="white" stroke-width="0.5"/></svg>';
const activeSvg = 'data:image/svg+xml;base64,' + btoa(svgDark);

const sidepanel = document.querySelector('.Lsidepanel')
const sideFilterpanel = document.querySelector('.LsideFilterpanel')

const loading = document.querySelector('#Lloader')

const closeMenu = document.querySelector('.LcloseMenu')
const LlistBtn = document.querySelector('.LlistBtn')

const Ltitle = document.querySelector('.Ltitle')
const LtitleRsp = document.querySelector('.LtitleRsp')
const Limage = document.querySelector('.Limage')
const Ladress = document.querySelector('.Ladress')
const Lphone = document.querySelector('.Lphone')
const Lwebsite = document.querySelector('.Lwebsite')
const LwebsiteBlock = document.querySelector('.LwebsiteBlock')
const LphoneBlock = document.querySelector('.LphoneBlock')

const filterActiviteIcon = document.querySelector('.LactiviteIcon')
const filterRestaurationIcon = document.querySelector('.LrestaurationIcon')
const filterHebergementIcon = document.querySelector('.LhebergementIcon')
const filterServiceIcon = document.querySelector('.LserviceIcon')

let clickedMarker;

let geojson = {
    type: "FeatureCollection",
    features: []
}

const activeIcon = new L.Icon({
    iconUrl: activeSvg,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const baseIcon = new L.Icon({
    iconUrl: baseSvg,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const mymap = L.map('mapid',{
    minZoom : 8,
    zoomControl : false,
})


// define the tile
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

L.tileLayer(tileUrl, { 
    attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20,
    zoomOffest: -1,
    }).addTo(mymap)

// set view with offset
L.Map.prototype.setViewOffset = function (latlng, offset, targetZoom) {
    var targetPoint = this.project(latlng, targetZoom).subtract(offset),
    targetLatLng = this.unproject(targetPoint, targetZoom);
    return this.setView(targetLatLng, targetZoom);
}


// Go back to the filterd list 
LlistBtn.addEventListener('click', function(){
    sidepanel.classList.remove('active');
    if(filterActiviteIcon.classList.contains('active') || filterRestaurationIcon.classList.contains('active') || filterHebergementIcon.classList.contains('active') || filterServiceIcon.classList.contains('active')){
        sideFilterpanel.classList.add('active');
    }
    if(clickedMarker){
    clickedMarker.setIcon(baseIcon);
    }
})

// function to close menu
closeMenu.addEventListener('click', function(e){
    sidepanel.classList.remove('active');
    if(filterActiviteIcon.classList.contains('active') || filterRestaurationIcon.classList.contains('active') || filterHebergementIcon.classList.contains('active') || filterServiceIcon.classList.contains('active')){
        sideFilterpanel.classList.add('active');
    }
    mymap.setView([clickedMarker.feature.geometry.coordinates[1], clickedMarker.feature.geometry.coordinates[0]], 12, {animation : true});
    clickedMarker.setIcon(baseIcon)
})

// get screen width
function screenWidth (){
    const chrome = window.navigator.userAgent.includes('Chrome')
    if(chrome){
        return window.outerWidth - 16
    } else {
        return window.innerWidth
    }
}


// Image modal
Limage.addEventListener('click', function(e) {
    const modal = document.querySelector('.Lmodal')
    const modalClose = document.querySelector('.LmodalClose')
    const featuredImg = document.querySelector('.featuredImg')

    featuredImg.src = e.target.src
    modal.style.display = 'flex'

    modalClose.addEventListener('click', function(){
        featuredImg.src = ""
        modal.style.display = 'none'
    })

    modal.addEventListener('click', function(){
        featuredImg.src = ""
        modal.style.display = 'none'
    })

    featuredImg.addEventListener('click', function(){
        featuredImg.src = ""
        modal.style.display = 'none'
    })
})



// fetch the data and populate the map

fetch('https://script.googleusercontent.com/macros/echo?user_content_key=Tvu5ydypmc9FPX_faTChkkTS9UhxK1WQ7ETa2KVwqbPDFwaMBofMOuNuw24yUiBWKTbagYLNz_-0uLQtK0qkGpki1TsG8wQem5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLqrBgluDekbTIPQZNVHGf7dfDkcJ3TALlZKQbnzqASdeoNp780cEthHw__5aZrAQFFrGqk7FSJR&lib=M1-0sR9glFGJodTTkG848NlT3K2hnuyIu')
.then(response => response.json())
.then(obj => {
    obj[0].data.forEach(item => {
        const coord = item.coordinates.split(',')
        let parseCoord = [parseFloat(coord[0]), parseFloat(coord[1])]
        let newData = {
            type : item.type,
            properties : {
                category : item.category,
                name : item.name,
                image : item.image,
                adress : item.adress,
                phone : item.phone,
                website : item.website,
            },
            geometry: {
                type : item.geometry__type,
                coordinates : parseCoord
            }
        }
        geojson.features.push(newData)
        loading.remove()
    })

    // variable for each feature of the differents layers

    const eachFeatureCode = function(feature, layer){
        if(feature.geometry.type === 'Point'){
            layer.on('click', function(e){
                if(clickedMarker){
                    clickedMarker.setIcon(baseIcon);
                    clickedMarker.setZIndexOffset(222)
                }
                e.target.setIcon(activeIcon);
                clickedMarker = e.target;
                clickedMarker.setZIndexOffset(6000)
                if(screenWidth() < 1024){
                    mymap.setViewOffset(e.target.getLatLng(),[20, -80],14, {animation : true}) 
                }
                if(screenWidth() >= 1024){
                    mymap.setViewOffset(e.target.getLatLng(),[-100, 0],14, {animation : true}) 
                }
                if(screenWidth() >= 1440){
                    mymap.setViewOffset(e.target.getLatLng(),[-150, 0],14, {animation : true}) 
                } 
                sidepanel.classList.add('active');
                sideFilterpanel.classList.remove('active')
                Ltitle.innerHTML = `${feature.properties.name}`
                LtitleRsp.innerHTML = `${feature.properties.name}`
                Limage.src = ""
                Limage.src = `${feature.properties.image}`
                Ladress.innerHTML = `${feature.properties.adress}`
                Ladress.href = `geo:${feature.geometry.coordinates[1]},${feature.geometry.coordinates[0]}`
                Lphone.innerHTML = `${feature.properties.phone}`
                Lphone.href = `tel:${feature.properties.phone}`
                Lwebsite.href = `${feature.properties.website}`

                if(feature.properties.website == ""){
                    LwebsiteBlock.style.display = 'none'
                }
                if(feature.properties.phone == ""){
                    LphoneBlock.style.display = 'none'
                }
                if(filterActiviteIcon.classList.contains('active') || filterRestaurationIcon.classList.contains('active') || filterHebergementIcon.classList.contains('active') || filterServiceIcon.classList.contains('active')){
                    LlistBtn.style.display = 'block'
                } else {
                    LlistBtn.style.display = 'none'
                }

            })
        }
    }

    function FilterPanel(mainIcon, secondIcon, thirdIcon, fourthIcon, title, layerName, mainLayer, secondLayer, thirdLayer, fourthLayer){
        // list panel open remove other
        sideFilterpanel.classList.toggle('active')

        if(secondIcon.classList.contains('active') || thirdIcon.classList.contains('active') || fourthIcon.classList.contains('active')){
            sideFilterpanel.classList.remove('active')
            sideFilterpanel.classList.add('active')
        }
        if(mainIcon.classList.contains('active')){
            sideFilterpanel.classList.remove('active')
        }

        // remove shop info
        sidepanel.classList.remove('active')

        // set inner panel html
        sideFilterpanel.innerHTML =`
            <div class="LsideFilterpanelInner">
                <div class="Lheader">
                    <svg class="LcloseMenuList" width="20" height="20" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="19.7809" y="0.688812" width="145" height="27" rx="13.5" transform="rotate(45 19.7809 0.688812)" fill="#4D4949"/>
                    <rect x="1.00012" y="102.53" width="145" height="27" rx="13.5" transform="rotate(-45 1.00012 102.53)" fill="#4D4949"/>
                    </svg>
                </div>
                <div class="Llist">
                    <div class="Lfilter">${title}</div>
                    <div class="LList">
                    </div>
                </div
            </div>
        `

        // populate data inside the panel
        const LList = document.querySelector('.LList')
        const layerData = Object.values(mainLayer._layers)
    
        layerData.forEach((layer)=>{
            if(layer.feature.properties.category == layerName){
                let box = document.createElement('li');
                box.innerHTML = `
                <svg class="LlocationIcon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 6H9" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 3V1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 11V9" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ${layer.feature.properties.name}
                `;
                box.setAttribute('id',`${layer._leaflet_id}`)
                box.setAttribute('long',`${layer.feature.geometry.coordinates[0]}`)
                box.setAttribute('lat',`${layer.feature.geometry.coordinates[1]}`)
                box.classList.add('LlistItem')
                LList.append(box)
            }
        })

        //select item on click
        LList.addEventListener('click', function(event){
            event.stopPropagation()
            const lat = event.target.getAttribute('lat')
            const long = event.target.getAttribute('long')
            const id = Number(event.target.getAttribute('id'))

            if(screenWidth() < 1024){
                mymap.setViewOffset([lat, long],[20, -80],12, {animation : true}) 
            }
            if(screenWidth() >= 1024){
                mymap.setViewOffset([lat, long],[-100, 0],12, {animation : true}) 
            }
            if(screenWidth() >= 1440){
                mymap.setViewOffset([lat, long],[-150, 0],12, {animation : true}) 
            }               

            if(clickedMarker){
                clickedMarker.setIcon(baseIcon);
                clickedMarker.setZIndexOffset(222)
            }

            clickedMarker = mainLayer.getLayer(id);
            clickedMarker.setIcon(activeIcon);
            clickedMarker.setZIndexOffset(6000)

            sidepanel.classList.add('active')
            sideFilterpanel.classList.remove('active')

            LlistBtn.style.display = 'block'

            Ltitle.innerHTML = `${clickedMarker.feature.properties.name}`
            LtitleRsp.innerHTML = `${clickedMarker.feature.properties.name}`
            Limage.src = `${clickedMarker.feature.properties.image}`
            Ladress.innerHTML = `${clickedMarker.feature.properties.adress}`
            Ladress.href = `geo:${clickedMarker.feature.geometry.coordinates[1]},${clickedMarker.feature.geometry.coordinates[0]}`
            Lphone.innerHTML = `${clickedMarker.feature.properties.phone}`
            Lphone.href = `tel:${clickedMarker.feature.properties.phone}`
            Lwebsite.href = `${clickedMarker.feature.properties.website}`

            if(clickedMarker.feature.properties.website == ""){
                LwebsiteBlock.style.display = 'none'
            }

            if(clickedMarker.feature.properties.phone == ""){
                LphoneBlock.style.display = 'none'
            }
        })

        // set map view
        if(screenWidth() < 1000){
            if(!mainIcon.classList.contains('active')){
                mymap.fitBounds(mainLayer.getBounds(),{
                    paddingTopleft : [100, 100],
                    paddingBottomRight : [50, -80],
                    maxZoom: 9
                })
            } else {
                mymap.fitBounds(other.getBounds(),{
                    paddingBottomRight : [0, 100],
                    paddingTopLeft : [100, 100],
                    maxZoom : 9
                })
            }
        }else{
            if(!mainIcon.classList.contains('active')){
                mymap.fitBounds(mainLayer.getBounds(),{
                    paddingTopleft : [100, 100],
                    paddingBottomRight : [100, -20],
                    maxZoom: 10
                })
            } else {
                mymap.fitBounds(other.getBounds(),{
                    paddingBottomRight : [-200, 0],
                    maxZoom: 10
                })
            }
        }

        // reset if active marker
        if (clickedMarker){
            clickedMarker.setIcon(baseIcon)
        }

        // Make icon ative
        mainIcon.classList.toggle('active')
        // remove active form other panel
        secondIcon.classList.remove('active')
        thirdIcon.classList.remove('active')
        fourthIcon.classList.remove('active')

        // filter layer on the map
        if(mainIcon.classList.contains('active')){
            mymap.addLayer(mainLayer)
            mymap.removeLayer(secondLayer)
            mymap.removeLayer(thirdLayer)
            mymap.removeLayer(fourthLayer)
            mymap.removeLayer(other)
        } else {
            mymap.addLayer(mainLayer)
            mymap.addLayer(secondLayer)
            mymap.addLayer(thirdLayer)
            mymap.addLayer(fourthLayer)
            mymap.addLayer(other)
        }

        // close menu 
        const closeMenuList = document.querySelector('.LcloseMenuList')

        closeMenuList.addEventListener("click", function(e){
            sidepanel.classList.remove('active');
            sideFilterpanel.classList.remove('active');
            mainIcon.classList.remove('active')
            //reset marker
            if (clickedMarker){
                clickedMarker.setIcon(baseIcon)
                clickedMarker.setZIndexOffset(222)
            }
            
            mymap.addLayer(other)
            mymap.addLayer(mainLayer)
            mymap.addLayer(secondLayer)
            mymap.addLayer(thirdLayer)
            mymap.addLayer(fourthLayer)
        })
    }

    filterActiviteIcon.addEventListener('click', function(){
        FilterPanel(filterActiviteIcon, filterHebergementIcon, filterRestaurationIcon, filterServiceIcon, 'Visites et activités', 'activite', activite, hebergement, restauration, service)
    })

    filterRestaurationIcon.addEventListener('click', function(){
        FilterPanel(filterRestaurationIcon, filterHebergementIcon, filterActiviteIcon, filterServiceIcon, 'Pause gourmande', 'restauration', restauration, hebergement, activite, service)
    })

    filterHebergementIcon.addEventListener('click', function(){
        FilterPanel(filterHebergementIcon, filterRestaurationIcon, filterActiviteIcon, filterServiceIcon, 'Les hébergements', 'hebergement', hebergement, restauration, activite, service)
    })

    filterServiceIcon.addEventListener('click', function(){
        FilterPanel(filterServiceIcon, filterRestaurationIcon, filterActiviteIcon, filterHebergementIcon, 'Les commerces et services', 'service', service, restauration, activite, hebergement)
    })

    
    const service = L.geoJson(geojson, {
        filter: function(feature, layer) {
            return feature.properties.category == "service";
        },
        style : function(features){
            return{
                color : '#4B65F7',
                weight : 0.5,
            }
        },
        pointToLayer : function(geoJsonPoint, latlng){
                return L.marker(latlng,{
                icon : baseIcon,
                });
        },
        onEachFeature : eachFeatureCode,
    })

    const restauration = L.geoJson(geojson, {
        filter: function(feature, layer) {
            return feature.properties.category == "restauration";
        },
        style : function(features){
            return{
                color : '#4B65F7',
                weight : 0.5,
            }
        },
        pointToLayer : function(geoJsonPoint, latlng){
                return L.marker(latlng,{
                icon : baseIcon,
                });
        },
        onEachFeature : eachFeatureCode,
    })

    const hebergement = L.geoJson(geojson, {
        filter: function(feature, layer) {
            return feature.properties.category == "hebergement";
        },
        style : function(features){
            return{
                color : '#4B65F7',
                weight : 0.5,
            }
        },
        pointToLayer : function(geoJsonPoint, latlng){
                return L.marker(latlng,{
                icon : baseIcon,
                });
        },
        onEachFeature : eachFeatureCode,
    })

    const activite = L.geoJson(geojson, {
        filter: function(feature, layer) {
            return feature.properties.category == "activite";
        },
        style : function(features){
            return{
                color : '#4B65F7',
                weight : 0.5,
            }
        },
        pointToLayer : function(geoJsonPoint, latlng){
                return L.marker(latlng,{
                icon : baseIcon,
                });
        },
        onEachFeature : eachFeatureCode,
    })

    const other = L.geoJson(geojson, {
        filter: function(feature, layer) {
            return feature.properties.category == "";
        },
        style : function(features){
            return{
                color : '#4B65F7',
                weight : 0.5,
            }
        },
        pointToLayer : function(geoJsonPoint, latlng){
                return L.marker(latlng,{
                icon : baseIcon,
                });
        },
        onEachFeature : eachFeatureCode,
    })
    service.addTo(mymap)
    restauration.addTo(mymap)
    hebergement.addTo(mymap)
    activite.addTo(mymap)
    other.addTo(mymap)

    if (screenWidth() <= 660){
        mymap.fitBounds(other.getBounds(),{
            paddingBottomRight : [0, 100],
            paddingTopLeft : [100, 100],
            maxZoom : 9
        })
    }else {
        mymap.fitBounds(other.getBounds(),{
            paddingBottomRight : [-200, 0],
            maxZoom : 10
        })
    }
})
.catch(err => console.log(err))