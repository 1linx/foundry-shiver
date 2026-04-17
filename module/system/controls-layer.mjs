export default class ShiverControlsLayer extends (foundry.canvas?.layers?.PlaceablesLayer ?? PlaceablesLayer) {
  constructor() {
    super();
    this.objects = {};
  }

  static get layerOptions() {
    return foundry.utils.mergeObject(super.layerOptions, {
      name: 'shiver',
      zIndex: 60
    });
  }

  static get documentName() {
    return 'Token';
  }

  get placeables() {
    return [];
  }
}
