import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';

@Component({
  selector: 'app-legality',
  templateUrl: './legality.component.html',
  styleUrls: ['./legality.component.scss']
})
export class LegalityComponent implements OnInit {
 
  /**************************** */
  Highcharts = Highcharts; // required
  chartConstructor = 'mapChart'; // optional string, defaults to 'chart'
  chartOptions = {  }; // required
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false
  /************************************** */
  constructor() { }
  ngOnInit() {
    this.CreateMapData();
  }
  CreateMapData(){
    var Highcharts = require('highcharts/highmaps.js'),
    map = require('@highcharts/map-collection/custom/world.geo.json');
    this.chartOptions = {
      chart: {
            map: map,
            spacingBottom: 20
          },title: {
            text: 'World Legality Status'
          },
          legend: {
            enabled: true
          },
          
      plotOptions: {
        map: {
          allAreas: false,
          joinBy: ['iso-a2', 'code'],
          dataLabels: {
            enabled: true,
            color: '#FFFFFF',
            style: {
              fontWeight: 'bold'
            },
            // Only show dataLabels for areas with high label rank
            format: null,
            formatter: function () {
              if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                return this.point.properties['iso-a2'];
              }
            }
          },
          tooltip: {
            headerFormat: '',
            pointFormat: '{point.name}: <b>{series.name}</b>'
          }
        }
      },
    
      series: [{
        name: 'Legal',
        data: ['FO',
        'UM',
        'US',
        'JP',
        'SC',
        'IN',
        'FR',
        'FM',
        'PT',
        'SW',
        'SH',
        'BR',
        'KI',
        'PH',
        'MX',
        'ES',
        'BU',
        'MV',
        'SP',
        'GB',
        'GR',
        'AS',
        'DK',
        'GL',
        'GU',
        'MP',
        'PR',
        'VI',
        'CA',
        'ST',
        'CV',
        'DM',
        'NL',
        'JM',
        'WS',
        'OM',
        'VC',
        'TR',
        'BD',
        'LC',
        'NR',
        'NO',
        'KN',
        'BH',
        'GN',
        'ZW',
        'PL',
        'MK',
        'PY',
        'BY',
        'CZ',
        'BF',
        'NA',
        'LY',
        'TN',
        'BT',
        'MD',
        'SS',
        'BW',
        'BS',
        'NZ',
        'CU',
        'AU',
        'VE',
        'SB',
        'MG',
        'IS',
        'EG',
        'KG',
        'NP'].map(function (code) {
          return { code: code };
        }),color:'#32CD32'
      }, {
        name: 'Restricted',
        data: ['IN','NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CN', 'CH', 'LI', 'SK', 'HU',
          '', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK','RU'].map(function (code) {
            return { code: code };
          }),color:'#808000'
      }, {
        name: 'Illegal',
        data: ['FI', 'EE', 'LV', 'LT', 'BY', 'UA', 'MD', 'RO', 'BG', 'GR', 'TR', 'CY','CO','BO','EC'].map(function (code) {
          return { code: code };
        }),color:'red'
      },
    {
      name:'Unknown',
      data:['TO',
      'FI',
      'ID',
      'MU',
      'SE',
      'TT',
      'MY',
      'PA',
      'PW',
      'TV',
      'MH',
      'CL',
      'TH',
      'GD',
      'EE',
      'AG',
      'TW',
      'BB',
      'IT',
      'MT',
      'VU',
      'SG',
      'CY',
      'LK',
      'KM',
      'FJ',
      'RU',
      'VA',
      'SM',
      'KZ',
      'AZ',
      'TJ',
      'LS',
      'UZ',
      'MA',
      'TL',
      'TZ',
      'AR',
      'SA',
      'PK',
      'YE',
      'AE',
      'KE',
      'PE',
      'DO',
      'HT',
      'PG',
      'AO',
      'KH',
      'VN',
      'MZ',
      'CR',
      'BJ',
      'NG',
      'IR',
      'SV',
      'SL',
      'GW',
      'HR',
      'BZ',
      'ZA',
      'CF',
      'SD',
      'CD',
      'KW',
      'DE',
      'BE',
      'IE',
      'KP',
      'KR',
      'GY',
      'HN',
      'MM',
      'GA',
      'GQ',
      'NI',
      'LV',
      'UG',
      'MW',
      'AM',
      'SX',
      'TM',
      'ZM',
      'NC',
      'MR',
      'DZ',
      'LT',
      'ET',
      'ER',
      'GH',
      'SI',
      'GT',
      'BA',
      'JO',
      'SY',
      'MC',
      'AL',
      'UY',
      'CNM',
      'MN',
      'RW',
      'SO',
      'CM',
      'CG',
      'EH',
      'RS',
      'ME',
      'TG',
      'LA',
      'AF',
      'UA',
      'SK',
      'JK',
      'BG',
      'QA',
      'LI',
      'AT',
      'SZ',
      'HU',
      'RO',
      'NE',
      'LU',
      'AD',
      'CI',
      'LR',
      'BN',
      'IQ',
      'GE',
      'GM',
      'TD',
      'KV',
      'LB',
      'DJ',
      'BI',
      'SR',
      'IL',
      'ML',
      'SN'].map(function (code) {
        return { code: code };
      }),color:'#E0E0E0'
    }]
    }
    
  }
}
