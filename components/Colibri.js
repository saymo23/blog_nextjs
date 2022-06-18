import React from 'react'

function NFTColibri(){
  const colors = [
    '#61946D', '#D0E562', '#B6D369', '#C2E812', '#91F5AD', '#59A96A',
    '#06BCC1', '#12263A', '#65AFFF',
    '#22ab24', '#cd0e66', '#18aa93', '#6f27cc', '#0f82f2', '#fd8c00'
  ]
  //Le damos a cada pieza del tangram un color aleatorio
  return colors[Math.floor(Math.random() * colors.length)];
  
}

function Colibri() {
  
  return (
    <div>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" id='colibri' viewBox="0 0 8000 8000" preserveAspectRatio="xMidYMid meet">
        <g className="layer_c" fill={NFTColibri()} stroke="none">
        <path d="M2410 3885 l0 -625 625 0 625 0 0 625 0 625 -625 0 -625 0 0 -625z"/>
        </g>
        <g className="layer_c" fill={NFTColibri()} stroke="none">
        <path d="M3680 4514 l0 -1252 743 -6 c408 -4 973 -6 1255 -4 l512 3 -1255 1255 -1255 1255 0 -1251z"/>
        </g>
        <g className="layer_c" fill={NFTColibri()} stroke="none">
        <path d="M3038 5143 l-618 -618 617 3 c340 2 619 5 620 6 2 2 2 278 1 614 l-3 612 -617 -617z"/>
        </g>
        <g className="layer_c" fill={NFTColibri()} stroke="none">
        <path d="M4302 6407 l-622 -622 625 -625 625 -625 0 1248 c0 686 -1 1247 -3 1247 -1 0 -282 -280 -625 -623z"/>
        </g>
        <g className="layer_c" fill={NFTColibri()} stroke="none">
        <path d="M1733 2353 l887 -888 887 888 888 887 -1775 0 -1775 0 888 -887z"/>
        </g>
        <g className="layer_c" fill={NFTColibri()} stroke="none">
        <path d="M4865 2800 l440 -440 890 0 890 0 -440 440 -440 440 -890 0 -890 0 440 -440z"/>
        </g>
      </svg>
    </div>
  )
}


export default Colibri;