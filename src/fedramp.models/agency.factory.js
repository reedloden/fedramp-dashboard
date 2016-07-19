(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('Agency', AgencyFactory);

    AgencyFactory.$inject = [];

    function AgencyFactory () {
        /**
         * The agency
         * @constructor
         * @memberof Models
         */
        function Agency (options) {
            // Scope `this` to self
            var self = this;

            /**
             * The model type
             * @member {string}
             * @memberof Models.Agency
             */
            self.type = 'agency';

            /**
             * The agency name
             * @member {string}
             * @memberof Models.Agency
             */
            self.name = '';

            /**
             * The number of times the agency was used
             * @member {integer}
             * @memberof Models.Agency
             */
            self.reuses = 0;

            /**
             * The number of times the agency was a sponsoring entity
             * @member {integer}
             * @memberof Models.Agency
             */
            self.sponsored = 0;

            /**
             * The number of times the agency was an authorizing entity
             * @member {integer}
             * @memberof Models.Agency
             */
            self.authorized = 0;

            /**
             * Providers associated to the agency
             * @member {array}
             * @memberof Models.Agency
             */
            self.providers = [];

            /**
             * Products associated to the agency
             * @member {array}
             * @memberof Models.Agency
             */
            self.products = [];

            /**
             * Assessors associated to the agency
             * @member {array}
             * @memberof Models.Agency
             */
            self.assessors = [];
        }

        return Agency;
    }
})();
