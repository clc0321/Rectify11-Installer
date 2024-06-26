

// saveSetting(string theSettingName, string aSettingValue)
// ========================================================
function saveSetting(theSettingName, aSettingValue)
{
	System.Gadget.Settings.write(theSettingName, aSettingValue);
}

// readSetting(string theSettingName)
// ==================================
function readSetting(theSettingName)
{
	return System.Gadget.Settings.read(theSettingName);
}

function showOrHide(oHTMLElement, bShowOrHide) {
	if (typeof(oHTMLElement)=="string") { oHTMLElement = document.getElementById(oHTMLElement); }
	if (oHTMLElement && oHTMLElement.style) {
		oHTMLElement.style.display = (bShowOrHide) ? 'block' : 'none';
	}
}

// getLocalizedString(string key) 
// returns localized string provided a value is available in a localized LCID folder
// ============================== 
function getLocalizedString(key)
{
    var retVal = L_localizedStrings_Text[key];
    if (retVal === undefined)
    {
        retVal = key;
    }

    return retVal;
}
