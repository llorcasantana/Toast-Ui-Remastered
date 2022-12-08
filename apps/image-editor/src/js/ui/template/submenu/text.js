/**
 * @param {Object} submenuInfo - submenu info for make template
 *   @param {Locale} locale - Translate text
 *   @param {Function} makeSvgIcon - svg icon generator
 * @returns {string}
 */
export default ({ locale, makeSvgIcon }) => `
    <ul class="tui-image-editor-submenu-item">
        <li class="tie-text-effect-button">
            <div class="tui-image-editor-button bold">
                <div>
                    ${makeSvgIcon(['normal', 'active'], 'text-bold', true)}
                </div>
                <label> ${locale.localize('Bold')} </label>
            </div>
            <div class="tui-image-editor-button italic">
                <div>
                    ${makeSvgIcon(['normal', 'active'], 'text-italic', true)}
                </div>
                <label> ${locale.localize('Italic')} </label>
            </div>
            <div class="tui-image-editor-button underline">
                <div>
                    ${makeSvgIcon(['normal', 'active'], 'text-underline', true)}
                </div>
                <label> ${locale.localize('Underline')} </label>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li class="tie-text-align-button">
            <div class="tui-image-editor-button left">
                <div>
                    ${makeSvgIcon(['normal', 'active'], 'text-align-left', true)}
                </div>
                <label> ${locale.localize('Left')} </label>
            </div>
            <div class="tui-image-editor-button center">
                <div>
                    ${makeSvgIcon(['normal', 'active'], 'text-align-center', true)}
                </div>
                <label> ${locale.localize('Center')} </label>
            </div>
            <div class="tui-image-editor-button right">
                <div>
                    ${makeSvgIcon(['normal', 'active'], 'text-align-right', true)}
                </div>
                <label> ${locale.localize('Right')} </label>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li>
            <div class="tie-text-color" title="${locale.localize('Color')}"></div>
        </li>
        <li class="tui-image-editor-partition only-left-right">
            <div></div>
        </li>
        <li class="tui-image-editor-partition tui-image-editor-newline"></li>
        <li class="tui-image-editor-newline tui-image-editor-range-wrap" style="margin-top: 10px; margin-left: -20px">
            <label class="tie-text-color">${locale.localize('Font family')}</label>
            <select id="selecth1FontFamily" name="selectFontFamily" class="tie-text-font-family tui-image-editor-range">
              <option> Arial </option>   
              <option> Courier New </option>                         
              <option> Garamond </option>                         
              <option> Georgia </option>                         
              <option> Helvetica </option>                         
              <option> Impact </option>                         
              <option> Lucida Console </option>                         
              <option> Noto Sans </option>                         
              <option> Times New Roman </option>                                
              <option> Tahoma </option>                                    
              <option> Times New Roman </option>                                    
              <option> Trebuchet MS </option>                                    
              <option> Verdana </option>                                    
            </select>
        </li>
        <li class="tui-image-editor-newline tui-image-editor-range-wrap">
            <label class="range">${locale.localize('Text size')}</label>
            <div class="tie-text-range"></div>
            <input class="tie-text-range-value tui-image-editor-range-value" value="0" />
        </li>
    </ul>
`;
