import { ApiResponse, ApiOkResponse, ApiErrorResponse } from 'apisauce';

export const googleDetailResponse = {
  html_attributions: [],
  result: {
    address_components: [
      {
        long_name: '915',
        short_name: '915',
        types: ['street_number'],
      },
      {
        long_name: 'Avenida Doutor Romeu Tórtima',
        short_name: 'Avenida Doutor Rua Tórtima',
        types: ['route'],
      },
      {
        long_name: 'Cidade Universitária',
        short_name: 'Cidade Universitária',
        types: ['sublocality_level_1', 'sublocality', 'political'],
      },
      {
        long_name: 'Campinas',
        short_name: 'Campinas',
        types: ['administrative_area_level_2', 'political'],
      },
      {
        long_name: 'São Paulo',
        short_name: 'SP',
        types: ['administrative_area_level_1', 'political'],
      },
      {
        long_name: 'Brasil',
        short_name: 'BR',
        types: ['country', 'political'],
      },
      {
        long_name: '13083-897',
        short_name: '13083-897',
        types: ['postal_code'],
      },
    ],
    adr_address:
      '\u003cspan class="street-address"\u003eAv. Dr. Romeu Tórtima, 915\u003c/span\u003e - \u003cspan class="extended-address"\u003eCidade Universitária\u003c/span\u003e, \u003cspan class="locality"\u003eCampinas\u003c/span\u003e - \u003cspan class="region"\u003eSP\u003c/span\u003e, \u003cspan class="postal-code"\u003e13083-897\u003c/span\u003e, \u003cspan class="country-name"\u003eBrasil\u003c/span\u003e',
    formatted_address:
      'Av. Dr. Romeu Tórtima, 915 - Cidade Universitária, Campinas - SP, 13083-897, Brasil',
    formatted_phone_number: '(19) 3289-1010',
    geometry: {
      location: {
        lat: -22.8254811,
        lng: -47.07233100000001,
      },
      viewport: {
        northeast: {
          lat: -22.82416196970849,
          lng: -47.0709256697085,
        },
        southwest: {
          lat: -22.8268599302915,
          lng: -47.0736236302915,
        },
      },
    },
    icon:
      'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
    id: '9f4dafd0907bef38f36f13e31a96918b3cd7284d',
    international_phone_number: '+55 19 3289-1010',
    name: 'Cirurgião Dentista - Dr. João Octávio Osse',
    place_id: 'ChIJW1Vj0LDGyJQRsfzWLkY-6ZQ',
    plus_code: {
      compound_code: '5WFH+R3 Campinas, SP, Brasil',
      global_code: '589J5WFH+R3',
    },
    reference: 'ChIJW1Vj0LDGyJQRsfzWLkY-6ZQ',
    scope: 'GOOGLE',
    types: ['doctor', 'health', 'point_of_interest', 'establishment'],
    url: 'https://maps.google.com/?cid=10730176058341391537',
    utc_offset: -180,
    vicinity:
      'Avenida Doutor Romeu Tórtima, 915 - Cidade Universitária, Campinas',
  },
  status: 'OK',
};

export const placesDetailResponse: ApiOkResponse<
  typeof googleDetailResponse
> = {
  ok: true,
  problem: null,
  originalError: null,
  data: googleDetailResponse,
};

export const placesDetailErrorResponse: ApiErrorResponse<
  typeof googleDetailResponse | null
> = {
  ok: false,
  problem: null,
  originalError: null,
  data: null,
};

export const googleNearbyResponse = {
  html_attributions: [],
  next_page_token:
    'CqQCFwEAAOuU8j8bMJUAPpjKJCngZzxSd-tP-CcZip8u8rz0JZ2o7t4ggeqVlQwDDjHcr6IWnWJ5e6bpq-4DJjj-PfN2y0XZE6KhXk-pewx-89bUaGknlzAMSckuQpG0igEw-lNikeyVc2_YZGSPpPfw8luDrgKza34c9diWWjRKocDg23R4uHguH3nadK3e_tN1RGm_sSmrfr9v6-EpzwctUgSPJf5KIN7KDx16XgbKtqNxJXQfPQBspZevDJMwGWUv8zk39wYH9tBZV6ePTm9PDzzPBFd4cWc2Tf3t_IxF0KUwkcyI7QOW9Pzzg4TcoHIp2xmoU0Jya2AabgvbORqvRu91lkMFpL9IY27J6t7xZ8nmsWhw-Wks09JZ1dxlIRD74lq3mRIQ51XAmfQrVz8e4fjcCExlixoUdWR2k8gdJLu-e_xdoN4p4ogDWdQ',
  results: [
    {
      geometry: {
        location: {
          lat: -22.8254811,
          lng: -47.07233100000001,
        },
        viewport: {
          northeast: {
            lat: -22.82416196970849,
            lng: -47.0709256697085,
          },
          southwest: {
            lat: -22.8268599302915,
            lng: -47.0736236302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '9f4dafd0907bef38f36f13e31a96918b3cd7284d',
      name: 'Cirurgião Dentista - Dr. João Octávio Osse',
      place_id: 'ChIJW1Vj0LDGyJQRsfzWLkY-6ZQ',
      plus_code: {
        compound_code: '5WFH+R3 Campinas, SP, Brasil',
        global_code: '589J5WFH+R3',
      },
      reference: 'ChIJW1Vj0LDGyJQRsfzWLkY-6ZQ',
      scope: 'GOOGLE',
      types: ['doctor', 'health', 'point_of_interest', 'establishment'],
      vicinity:
        'Avenida Doutor Romeu Tórtima, 915 - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8254811,
          lng: -47.07233100000001,
        },
        viewport: {
          northeast: {
            lat: -22.82416196970849,
            lng: -47.0709256697085,
          },
          southwest: {
            lat: -22.8268599302915,
            lng: -47.0736236302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '6c0889b6dcdf9e45f7911c0cfd6fa3a4057c0a78',
      name: 'Dona Bella Cidade Universitaria',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 720,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/100968088892287973771/photos">Tatiane oliveira</a>',
          ],
          photo_reference:
            'CmRaAAAAynHWrdrQ42vq6S_ITXR8XYz62uqAOWLdSOLwbXAm2lnOsd_J8TVZvnEnuZ8suhdDf9LuNjnQkFL-lsiH6n-XDRJ4HcnSG4PHYo_Nd-Dsp9QMbzJrbhHlcWi3EcRKonwZEhDJLTo0xoRSE8KWJzavuz7SGhR48L7m1HTdN6fslTa-N7jTb_XCBg',
          width: 1280,
        },
      ],
      place_id: 'ChIJwzR02rDGyJQR2bC0NdfYSVI',
      plus_code: {
        compound_code: '5WFH+R3 Cidade Universitária, Campinas - SP, Brasil',
        global_code: '589J5WFH+R3',
      },
      rating: 4.7,
      reference: 'ChIJwzR02rDGyJQR2bC0NdfYSVI',
      scope: 'GOOGLE',
      types: [
        'beauty_salon',
        'hair_care',
        'point_of_interest',
        'establishment',
      ],
      user_ratings_total: 88,
      vicinity:
        'Avenida Doutor Romeu Tórtima, 915A - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8254601,
          lng: -47.0722794,
        },
        viewport: {
          northeast: {
            lat: -22.8241618197085,
            lng: -47.0709939197085,
          },
          southwest: {
            lat: -22.8268597802915,
            lng: -47.0736918802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '5c229793c2d391e403fd8d0208f2a4f524b0db2e',
      name: 'Osse Construtora - Engenharia, Obras, Arquitetura & Construção',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 2268,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/111245430394880841310/photos">Osse Construtora - Engenharia, Obras, Arquitetura &amp; Construção</a>',
          ],
          photo_reference:
            'CmRaAAAA20c_kQlkruGM11NqPBE9mf6gU_BRPzOEInDyFoBX1748RzT4_bFWNSVLRaYZUb56WspFqWa6t9kFpeMrPYsDl_X7V5drG4Z7ou5sk167xhHn90bhiOZgZl7dOIuIpYONEhBr8H0JOF_lN91LPsfjpgPpGhQOCYh1ATB5YactM8Vt-hmrRbC_og',
          width: 4032,
        },
      ],
      place_id: 'ChIJOxhh0LDGyJQROQzxtExY5qk',
      plus_code: {
        compound_code: '5WFH+R3 Cidade Universitária, Campinas - SP, Brasil',
        global_code: '589J5WFH+R3',
      },
      rating: 4.8,
      reference: 'ChIJOxhh0LDGyJQROQzxtExY5qk',
      scope: 'GOOGLE',
      types: ['general_contractor', 'point_of_interest', 'establishment'],
      user_ratings_total: 9,
      vicinity:
        'Rua Engenheiro Humberto Soares de Camargo, 915 - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8253173,
          lng: -47.07246869999999,
        },
        viewport: {
          northeast: {
            lat: -22.8240064197085,
            lng: -47.0711674697085,
          },
          southwest: {
            lat: -22.8267043802915,
            lng: -47.07386543029149,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: 'e71419d5c404371173fd94001795e228e092e085',
      name: 'Dandelia ateliê',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 669,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/118356312389786381579/photos">Dandelia ateliê</a>',
          ],
          photo_reference:
            'CmRaAAAA9xXUTmbFRlAvaJjsDkleO63KPYIuj9srYUTYOjIjlOhF084rjVL_NvwhFVGWkP_rkCNSUAo1w8kwEHNwNJau6EHiVJu3BjDHsuBc8p0MgemEh6nXiVcBZ_FGEUw-Nhf2EhDYw5wrWwDXaxuW7x4ePuocGhQgNHv2pmyKcm5MQXDc22kAIejbGA',
          width: 1046,
        },
      ],
      place_id: 'ChIJV6flvovHyJQRwRzA3NRY6Mg',
      plus_code: {
        compound_code: '5WFH+V2 Cidade Universitária, Campinas - SP, Brasil',
        global_code: '589J5WFH+V2',
      },
      reference: 'ChIJV6flvovHyJQRwRzA3NRY6Mg',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'establishment'],
      vicinity:
        'Rua Engenheiro Humberto Soares de Camargo, 903 - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8257949,
          lng: -47.0722641,
        },
        viewport: {
          northeast: {
            lat: -22.8244320697085,
            lng: -47.0709362697085,
          },
          southwest: {
            lat: -22.8271300302915,
            lng: -47.0736342302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '4ddb031b15c8f3f9ef7ab3118fef715d657926ec',
      name: 'Clínica Doutor André Luiz Vergnanini',
      opening_hours: {
        open_now: false,
      },
      place_id: 'ChIJMX6OxbDGyJQRsY0wZVrmIiE',
      plus_code: {
        compound_code: '5WFH+M3 Campinas, SP, Brasil',
        global_code: '589J5WFH+M3',
      },
      rating: 3.7,
      reference: 'ChIJMX6OxbDGyJQRsY0wZVrmIiE',
      scope: 'GOOGLE',
      types: ['health', 'point_of_interest', 'establishment'],
      user_ratings_total: 3,
      vicinity:
        'Avenida Doutor Romeu Tórtima, 466 - Cid Universitaria, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8252006,
          lng: -47.07216679999999,
        },
        viewport: {
          northeast: {
            lat: -22.8238871197085,
            lng: -47.07075606970849,
          },
          southwest: {
            lat: -22.8265850802915,
            lng: -47.07345403029149,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png',
      id: '90abf2b25b8cef4e272d9d2ddf726e06f9b4e08d',
      name: 'Mães Amigas',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 640,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/104475637465323844511/photos">Mães Amigas</a>',
          ],
          photo_reference:
            'CmRaAAAA6RAgXTh4BCGHUZfD2fGeNiU88-W3uLNWYyd7D1BogdrgBdsjQHbA65PYbcFcNiFPeIGdRnXqDhwBdv55lditnqiNrx9I9ePpuD8mWcZfTw8jbzMct3d5xPiOQCyNS7KJEhB5spWguhHtX3kUCHfQd29tGhRchtJXUZLzJbvQLKMx_Khi0E276g',
          width: 966,
        },
      ],
      place_id: 'ChIJdzDQ27DGyJQRGo_NHCmCN4g',
      plus_code: {
        compound_code: '5WFH+W4 Cidade Universitária, Campinas - SP, Brasil',
        global_code: '589J5WFH+W4',
      },
      reference: 'ChIJdzDQ27DGyJQRGo_NHCmCN4g',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'establishment'],
      vicinity:
        'Avenida Doutor Romeu Tórtima, 1255 - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8252096,
          lng: -47.07211319999999,
        },
        viewport: {
          northeast: {
            lat: -22.8238837697085,
            lng: -47.0707239197085,
          },
          southwest: {
            lat: -22.8265817302915,
            lng: -47.0734218802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '7a7ebbe8ccb5a673b51ee43815088605af0b4f34',
      name: 'Redinteligente Interatividade do Conhecimento',
      place_id: 'ChIJm1l62bDGyJQRDJ9SbV4OC5k',
      plus_code: {
        compound_code: '5WFH+W5 Campinas, SP, Brasil',
        global_code: '589J5WFH+W5',
      },
      reference: 'ChIJm1l62bDGyJQRDJ9SbV4OC5k',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'establishment'],
      vicinity:
        'Avenida Doutor Romeu Tórtima, 1255 - Jardim Santa Genebra II (Barao Geraldo), Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8251501,
          lng: -47.07217869999999,
        },
        viewport: {
          northeast: {
            lat: -22.8238461697085,
            lng: -47.0707513697085,
          },
          southwest: {
            lat: -22.8265441302915,
            lng: -47.07344933029149,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      id: 'fc5c2b2b9cfd151247e7aeca789fa609441f9eff',
      name: 'Kanu Sushi',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 4032,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/106288787586874036774/photos">Ryan Ferreira</a>',
          ],
          photo_reference:
            'CmRaAAAA0yaslyHKJjGg04GleRbbepZQHfpiCXl13a5eLPuYZ_xw5AdPXc-EzTXrcCX3BJoFELiYzRYFpahbB0GlLY_PIf9Tjed46HBc4Bdp72h3efsdWSvocl2BnWh0oJK_9hyBEhBBL6U0TifHKTBfpWSKPiY0GhTJR0sPiZHrsOYGoDx5s8n4ma_lXg',
          width: 3024,
        },
      ],
      place_id: 'ChIJLxTktTfHyJQRLWbPiUrZREQ',
      plus_code: {
        compound_code: '5WFH+W4 Barão Geraldo, Campinas - SP, Brasil',
        global_code: '589J5WFH+W4',
      },
      rating: 4.3,
      reference: 'ChIJLxTktTfHyJQRLWbPiUrZREQ',
      scope: 'GOOGLE',
      types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
      user_ratings_total: 243,
      vicinity: 'Avenida Doutor Romeu Tórtima, 1259 - Barão Geraldo, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8260003,
          lng: -47.072711,
        },
        viewport: {
          northeast: {
            lat: -22.8247047197085,
            lng: -47.0714270697085,
          },
          southwest: {
            lat: -22.8274026802915,
            lng: -47.0741250302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '9920fe92b249f591cabb6cd884af33e8e70247aa',
      name: 'Revista Eletrônica Acervo Saúde',
      place_id: 'ChIJAQBwzLDGyJQRDtgrYXQoNmE',
      plus_code: {
        compound_code: '5WFG+HW Campinas, SP, Brasil',
        global_code: '589J5WFG+HW',
      },
      reference: 'ChIJAQBwzLDGyJQRDtgrYXQoNmE',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'establishment'],
      vicinity:
        'Rua Doutor Luciano Venere Decourt, 941 - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.826038,
          lng: -47.07261,
        },
        viewport: {
          northeast: {
            lat: -22.8246970697085,
            lng: -47.0712465197085,
          },
          southwest: {
            lat: -22.8273950302915,
            lng: -47.0739444802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '0e9f0e7726bd01be36de6fd11d587acf266a126e',
      name:
        'Dr. Romeu Tórtima 1103-1177 - Jardim Santa Genebra II (Barao Geraldo)',
      place_id: 'ChIJL8X8y7DGyJQRDPZJSJNbHC0',
      plus_code: {
        compound_code: '5WFG+HX Campinas, SP, Brasil',
        global_code: '589J5WFG+HX',
      },
      reference: 'ChIJL8X8y7DGyJQRDPZJSJNbHC0',
      scope: 'GOOGLE',
      types: ['transit_station', 'point_of_interest', 'establishment'],
      vicinity: 'Brazil',
    },
    {
      geometry: {
        location: {
          lat: -22.826066,
          lng: -47.07229339999999,
        },
        viewport: {
          northeast: {
            lat: -22.8246823197085,
            lng: -47.0710005197085,
          },
          southwest: {
            lat: -22.8273802802915,
            lng: -47.07369848029149,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png',
      id: '8e379844aa3afb6d768f7bf06a501d60c7f25d4f',
      name: 'Sport E Saúde',
      photos: [
        {
          height: 2322,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/105830606083670708176/photos">Samantha Vanessa</a>',
          ],
          photo_reference:
            'CmRaAAAA32roB8PgxGrHicmxjux_V4NiYtlXZ9-XP5hLTyqqI1Sy1r82J4pYGmisRul4nYdhz8y1dp1wtwRL4TZSQfiY2R-trLwrzSTLsPfYSainuse_HitRBTNwIl7V-FUyQdcJEhA8RrTMT4TA5knVjPawXzLlGhQhjH31AtNAJMCtO63E3B3wJ02IiA',
          width: 4128,
        },
      ],
      place_id: 'ChIJK1R_yLDGyJQR-zpUclfOPUA',
      plus_code: {
        compound_code: '5WFH+H3 Campinas, SP, Brasil',
        global_code: '589J5WFH+H3',
      },
      rating: 5,
      reference: 'ChIJK1R_yLDGyJQR-zpUclfOPUA',
      scope: 'GOOGLE',
      types: ['health', 'point_of_interest', 'store', 'establishment'],
      user_ratings_total: 1,
      vicinity: 'Avenida Doutor Romeu Tórtima - Jardim Santa Genebra, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8260999,
          lng: -47.0724543,
        },
        viewport: {
          northeast: {
            lat: -22.8247584697085,
            lng: -47.07109226970849,
          },
          southwest: {
            lat: -22.8274564302915,
            lng: -47.07379023029149,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png',
      id: '7ba21da876b186f93cbea671d76498e8bb2514b1',
      name: 'KingStoned - Smoke Shop Bar - Tabacaria',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 4096,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/106341677698218111231/photos">Luana de leon dos santos</a>',
          ],
          photo_reference:
            'CmRaAAAA7WiudXP07BhD6mlFaFNVyh_K3oI0gZyocQaIXOCxFkpUC0i_MoiKWNjgeEd8feJIPjMuPt4qe5B4HhlY7z_Ct28BdnNQfGLZbi-Tux1gIPQOhm7ROZVFOVTf8ipZ0-Q_EhAsdDbokOjoz5KgBcyTj7s8GhR9ENmLTt_EbXSSJXHqzpMXIWYNiw',
          width: 2304,
        },
      ],
      place_id: 'ChIJZ30AybDGyJQRySStXOn7XkY',
      plus_code: {
        compound_code: '5WFH+H2 Cidade Universitária, Campinas - SP, Brasil',
        global_code: '589J5WFH+H2',
      },
      rating: 4.7,
      reference: 'ChIJZ30AybDGyJQRySStXOn7XkY',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'store', 'establishment'],
      user_ratings_total: 75,
      vicinity:
        'Avenida Doutor Romeu Tórtima, 1140 - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.826092,
          lng: -47.07232,
        },
        viewport: {
          northeast: {
            lat: -22.8247116697085,
            lng: -47.0710252197085,
          },
          southwest: {
            lat: -22.8274096302915,
            lng: -47.07372318029149,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '432efae82323e0fbb4cc1c5e5bc2585be81fd5f3',
      name: 'Dr. Romeu Tórtima 1140 - Jardim Santa Genebra II (Barao Geraldo)',
      place_id: 'ChIJXWV6yLDGyJQR9-8UxAOXjz8',
      plus_code: {
        compound_code: '5WFH+H3 Campinas, SP, Brasil',
        global_code: '589J5WFH+H3',
      },
      reference: 'ChIJXWV6yLDGyJQR9-8UxAOXjz8',
      scope: 'GOOGLE',
      types: ['transit_station', 'point_of_interest', 'establishment'],
      vicinity: 'Brazil',
    },
    {
      geometry: {
        location: {
          lat: -22.8261388,
          lng: -47.0723871,
        },
        viewport: {
          northeast: {
            lat: -22.8247657697085,
            lng: -47.0710796697085,
          },
          southwest: {
            lat: -22.8274637302915,
            lng: -47.0737776302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '1db16f36bf0e2028a83250a4e8730ed0216eb7ec',
      name: 'Centro Cultural Franco Brasil Aliança Francesa de Campinas',
      photos: [
        {
          height: 1440,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/101157807977460124096/photos">Camila Rodrigues dos Santos</a>',
          ],
          photo_reference:
            'CmRaAAAADEB2owbV8FvSj_eeehlD2W8rH0FGyDqTlGtgivneZH2KSAG-BD_gyBK_vgzNMo7Gdv6kweyQ2sFpSfFAYOcgCrYB_H7czY_jqifZmKzaVATCLg0gX94OTyUYl8V_SbSFEhBQwO4LaH9I0Tf1h-6XlWghGhTjSluN0l61_LCzfKKGIH9meDMb2w',
          width: 2560,
        },
      ],
      place_id: 'ChIJ_-fRU7fGyJQRfKCNPO6_yIg',
      plus_code: {
        compound_code: '5WFH+G2 Campinas, SP, Brasil',
        global_code: '589J5WFH+G2',
      },
      rating: 4.5,
      reference: 'ChIJ_-fRU7fGyJQRfKCNPO6_yIg',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'establishment'],
      user_ratings_total: 12,
      vicinity:
        'Avenida Doutor Romeu Tórtima, 1140 - Jardim Santa Genebra, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8261388,
          lng: -47.0723871,
        },
        viewport: {
          northeast: {
            lat: -22.8247657697085,
            lng: -47.0710796697085,
          },
          southwest: {
            lat: -22.8274637302915,
            lng: -47.0737776302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '02dab17b0a722676333dcf97c52ca3070284a3fd',
      name: 'Ativa - Sistemas de Segurança',
      opening_hours: {
        open_now: false,
      },
      place_id: 'ChIJ8fCxt7DGyJQRfncqgxXzk0Q',
      plus_code: {
        compound_code: '5WFH+G2 Cidade Universitária, Campinas - SP, Brasil',
        global_code: '589J5WFH+G2',
      },
      rating: 5,
      reference: 'ChIJ8fCxt7DGyJQRfncqgxXzk0Q',
      scope: 'GOOGLE',
      types: [
        'electronics_store',
        'home_goods_store',
        'point_of_interest',
        'store',
        'establishment',
      ],
      user_ratings_total: 1,
      vicinity: 'Rua Vitório Casellato, 32 - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8261841,
          lng: -47.07234270000001,
        },
        viewport: {
          northeast: {
            lat: -22.82479546970849,
            lng: -47.07106226970851,
          },
          southwest: {
            lat: -22.8274934302915,
            lng: -47.07376023029151,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '31eaf08f06628d946bfd041945547e5b79aa0b62',
      name: 'Pura Beleza Express',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 2322,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/105830606083670708176/photos">Samantha Vanessa</a>',
          ],
          photo_reference:
            'CmRaAAAAya8p7EkUgJTkDJUYOl--416FeRFMnnhgukm8G6QfgJALi3qxs_CLCXn97egDmIIbJqXXgVY9f5QHdX-i7Nvzvj55uCr_vpN14Ht453Pvs_kCTwarxOk-u2lVAHTIIiKUEhBLpExpMdLBGesgK75okRk6GhTem9GqSBG-_YMDU9PC1wSx3kOaDA',
          width: 4128,
        },
      ],
      place_id: 'ChIJ_U8ayLDGyJQR7jXDi8I2ZMQ',
      plus_code: {
        compound_code: '5WFH+G3 Campinas, SP, Brasil',
        global_code: '589J5WFH+G3',
      },
      rating: 5,
      reference: 'ChIJ_U8ayLDGyJQR7jXDi8I2ZMQ',
      scope: 'GOOGLE',
      types: ['beauty_salon', 'point_of_interest', 'establishment'],
      user_ratings_total: 7,
      vicinity: 'Avenida Doutor Romeu Tórtima - Jardim Santa Genebra, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8262345,
          lng: -47.0723739,
        },
        viewport: {
          northeast: {
            lat: -22.8248452197085,
            lng: -47.0710945697085,
          },
          southwest: {
            lat: -22.8275431802915,
            lng: -47.0737925302915,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png',
      id: '1f2ff85d94a77755852ecf92356f63bc74d00d9b',
      name: 'Bo e Flô',
      place_id: 'ChIJ7Uret7DGyJQRbwnMAxTP-1U',
      plus_code: {
        compound_code: '5WFH+G3 Campinas, SP, Brasil',
        global_code: '589J5WFH+G3',
      },
      reference: 'ChIJ7Uret7DGyJQRbwnMAxTP-1U',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'clothing_store', 'store', 'establishment'],
      vicinity: 'Avenida Doutor Romeu Tórtima - Jardim Santa Genebra, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8262286,
          lng: -47.0723216,
        },
        viewport: {
          northeast: {
            lat: -22.8248293197085,
            lng: -47.0710596197085,
          },
          southwest: {
            lat: -22.8275272802915,
            lng: -47.0737575802915,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png',
      id: '5ff7905a940fb0990f7dcc6efe05452b0433d8a3',
      name: 'Alliança Francesa',
      place_id: 'ChIJk3f7t7DGyJQRWSLFwWunBk0',
      plus_code: {
        compound_code: '5WFH+G3 Campinas, SP, Brasil',
        global_code: '589J5WFH+G3',
      },
      reference: 'ChIJk3f7t7DGyJQRWSLFwWunBk0',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'establishment'],
      vicinity: 'Avenida Doutor Romeu Tórtima - Jardim Santa Genebra, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.8257036,
          lng: -47.0732312,
        },
        viewport: {
          northeast: {
            lat: -22.8243754697085,
            lng: -47.0719076197085,
          },
          southwest: {
            lat: -22.8270734302915,
            lng: -47.0746055802915,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png',
      id: '96526f36c8669ad8e9cd001e248e803d1845a8f2',
      name: 'Kitnet 188',
      photos: [
        {
          height: 3024,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/114598970834692387825/photos">Cristiano Tasselli Instalaçoes</a>',
          ],
          photo_reference:
            'CmRaAAAA7aTEYV8X-9KYVvGiCdSL6xFh7gRlRRGTzNZY8p4uVPs4BAe7HmJFwMrJDVPKr0cIth5nXG29ipkYH3X5qZo37YQoCeAW5oQo5JDsVDjoXQDCfQ0T9mr6zWY_e7OP8n5gEhA7VKl1Pt2liw2kipx1X7W9GhTifvT7DW5zZURc0-_0sotR3zc70w',
          width: 4032,
        },
      ],
      place_id: 'ChIJmx301FrHyJQRusuX63U-Z74',
      plus_code: {
        compound_code: '5WFG+PP Campinas, SP, Brasil',
        global_code: '589J5WFG+PP',
      },
      rating: 4,
      reference: 'ChIJmx301FrHyJQRusuX63U-Z74',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 2,
      vicinity:
        'Rua Doutor Luciano Venere Decourt, 804-962 - Cidade Universitária, Campinas',
    },
    {
      geometry: {
        location: {
          lat: -22.825713,
          lng: -47.07323999999999,
        },
        viewport: {
          northeast: {
            lat: -22.8243766697085,
            lng: -47.0719064197085,
          },
          southwest: {
            lat: -22.8270746302915,
            lng: -47.0746043802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '605b8fbe800877b099e4b4e4f70cbe897ddc14e9',
      name: 'Lettré, l´art et la Culture',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 1600,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/114266479306939365067/photos">Lettré, l´art et la Culture</a>',
          ],
          photo_reference:
            'CmRaAAAAeywXAz8IDs8Dxtlor9M2TEfHf5Y-0KYT6S4Ich8U3Vqn1DWG8rzowcEc4U-zmCchVjt_er4PDRonWonTG0I8FKaewwFdEiXj-3Hs1hsRJhFMoyKdY0_5VaRcutvJIMGeEhDgNGh7IGdbPyGnKaqzmFbVGhSmzLKY-3XAR8dsW4VHSCAKXyboQQ',
          width: 1128,
        },
      ],
      place_id: 'ChIJbxOaLrfGyJQREQumL6ZRBmU',
      plus_code: {
        compound_code: '5WFG+PP Campinas, SP, Brasil',
        global_code: '589J5WFG+PP',
      },
      rating: 5,
      reference: 'ChIJbxOaLrfGyJQREQumL6ZRBmU',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'establishment'],
      user_ratings_total: 2,
      vicinity:
        'Rua Professor Doutor Luciano Venere Decourt 941 - Apto 02 - Cidade Universitária - Barão Geraldo, Campinas',
    },
  ],
  status: 'OK',
};

export const placesNearbyResponse: ApiOkResponse<
  typeof googleNearbyResponse
> = {
  ok: true,
  problem: null,
  originalError: null,
  data: googleNearbyResponse,
};

export const placesNearbyErrorResponse: ApiErrorResponse<
  typeof googleNearbyResponse | null
> = {
  ok: false,
  problem: null,
  originalError: null,
  data: null,
};
