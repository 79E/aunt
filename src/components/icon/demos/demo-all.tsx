import React from "react";
import { useCopy } from 'dumi/theme';
import * as Icons from 'aunt';
import './index.less';

const iconsList = [
    {
        "id":1,
        "name":"activity",
        "uname":"Activity",
        "cname":"AuntIconActivity",
        "component":<Icons.AuntIconActivity /> 
    },
    {
        "id":2,
        "name":"airplay",
        "uname":"Airplay",
        "cname":"AuntIconAirplay",
        "component":<Icons.AuntIconAirplay /> 
    },
    {
        "id":3,
        "name":"alert-circle",
        "uname":"AlertCircle",
        "cname":"AuntIconAlertCircle",
        "component":<Icons.AuntIconAlertCircle /> 
    },
    {
        "id":4,
        "name":"alert-octagon",
        "uname":"AlertOctagon",
        "cname":"AuntIconAlertOctagon",
        "component":<Icons.AuntIconAlertOctagon /> 
    },
    {
        "id":5,
        "name":"alert-triangle",
        "uname":"AlertTriangle",
        "cname":"AuntIconAlertTriangle",
        "component":<Icons.AuntIconAlertTriangle /> 
    },
    {
        "id":6,
        "name":"align-center",
        "uname":"AlignCenter",
        "cname":"AuntIconAlignCenter",
        "component":<Icons.AuntIconAlignCenter /> 
    },
    {
        "id":7,
        "name":"align-justify",
        "uname":"AlignJustify",
        "cname":"AuntIconAlignJustify",
        "component":<Icons.AuntIconAlignJustify /> 
    },
    {
        "id":8,
        "name":"align-left",
        "uname":"AlignLeft",
        "cname":"AuntIconAlignLeft",
        "component":<Icons.AuntIconAlignLeft /> 
    },
    {
        "id":9,
        "name":"align-right",
        "uname":"AlignRight",
        "cname":"AuntIconAlignRight",
        "component":<Icons.AuntIconAlignRight /> 
    },
    {
        "id":10,
        "name":"anchor",
        "uname":"Anchor",
        "cname":"AuntIconAnchor",
        "component":<Icons.AuntIconAnchor /> 
    },
    {
        "id":11,
        "name":"aperture",
        "uname":"Aperture",
        "cname":"AuntIconAperture",
        "component":<Icons.AuntIconAperture /> 
    },
    {
        "id":12,
        "name":"archive",
        "uname":"Archive",
        "cname":"AuntIconArchive",
        "component":<Icons.AuntIconArchive /> 
    },
    {
        "id":13,
        "name":"arrow-down-circle",
        "uname":"ArrowDownCircle",
        "cname":"AuntIconArrowDownCircle",
        "component":<Icons.AuntIconArrowDownCircle /> 
    },
    {
        "id":14,
        "name":"arrow-down-left",
        "uname":"ArrowDownLeft",
        "cname":"AuntIconArrowDownLeft",
        "component":<Icons.AuntIconArrowDownLeft /> 
    },
    {
        "id":15,
        "name":"arrow-down-right",
        "uname":"ArrowDownRight",
        "cname":"AuntIconArrowDownRight",
        "component":<Icons.AuntIconArrowDownRight /> 
    },
    {
        "id":16,
        "name":"arrow-down",
        "uname":"ArrowDown",
        "cname":"AuntIconArrowDown",
        "component":<Icons.AuntIconArrowDown /> 
    },
    {
        "id":17,
        "name":"arrow-left-circle",
        "uname":"ArrowLeftCircle",
        "cname":"AuntIconArrowLeftCircle",
        "component":<Icons.AuntIconArrowLeftCircle /> 
    },
    {
        "id":18,
        "name":"arrow-left",
        "uname":"ArrowLeft",
        "cname":"AuntIconArrowLeft",
        "component":<Icons.AuntIconArrowLeft /> 
    },
    {
        "id":19,
        "name":"arrow-right-circle",
        "uname":"ArrowRightCircle",
        "cname":"AuntIconArrowRightCircle",
        "component":<Icons.AuntIconArrowRightCircle /> 
    },
    {
        "id":20,
        "name":"arrow-right",
        "uname":"ArrowRight",
        "cname":"AuntIconArrowRight",
        "component":<Icons.AuntIconArrowRight /> 
    },
    {
        "id":21,
        "name":"arrow-up-circle",
        "uname":"ArrowUpCircle",
        "cname":"AuntIconArrowUpCircle",
        "component":<Icons.AuntIconArrowUpCircle /> 
    },
    {
        "id":22,
        "name":"arrow-up-left",
        "uname":"ArrowUpLeft",
        "cname":"AuntIconArrowUpLeft",
        "component":<Icons.AuntIconArrowUpLeft /> 
    },
    {
        "id":23,
        "name":"arrow-up-right",
        "uname":"ArrowUpRight",
        "cname":"AuntIconArrowUpRight",
        "component":<Icons.AuntIconArrowUpRight /> 
    },
    {
        "id":24,
        "name":"arrow-up",
        "uname":"ArrowUp",
        "cname":"AuntIconArrowUp",
        "component":<Icons.AuntIconArrowUp /> 
    },
    {
        "id":25,
        "name":"at-sign",
        "uname":"AtSign",
        "cname":"AuntIconAtSign",
        "component":<Icons.AuntIconAtSign /> 
    },
    {
        "id":26,
        "name":"award",
        "uname":"Award",
        "cname":"AuntIconAward",
        "component":<Icons.AuntIconAward /> 
    },
    {
        "id":27,
        "name":"bar-chart-two",
        "uname":"BarChartTwo",
        "cname":"AuntIconBarChartTwo",
        "component":<Icons.AuntIconBarChartTwo /> 
    },
    {
        "id":28,
        "name":"bar-chart",
        "uname":"BarChart",
        "cname":"AuntIconBarChart",
        "component":<Icons.AuntIconBarChart /> 
    },
    {
        "id":29,
        "name":"battery-charging",
        "uname":"BatteryCharging",
        "cname":"AuntIconBatteryCharging",
        "component":<Icons.AuntIconBatteryCharging /> 
    },
    {
        "id":30,
        "name":"battery",
        "uname":"Battery",
        "cname":"AuntIconBattery",
        "component":<Icons.AuntIconBattery /> 
    },
    {
        "id":31,
        "name":"bell-off",
        "uname":"BellOff",
        "cname":"AuntIconBellOff",
        "component":<Icons.AuntIconBellOff /> 
    },
    {
        "id":32,
        "name":"bell",
        "uname":"Bell",
        "cname":"AuntIconBell",
        "component":<Icons.AuntIconBell /> 
    },
    {
        "id":33,
        "name":"bluetooth",
        "uname":"Bluetooth",
        "cname":"AuntIconBluetooth",
        "component":<Icons.AuntIconBluetooth /> 
    },
    {
        "id":34,
        "name":"bold",
        "uname":"Bold",
        "cname":"AuntIconBold",
        "component":<Icons.AuntIconBold /> 
    },
    {
        "id":35,
        "name":"book-open",
        "uname":"BookOpen",
        "cname":"AuntIconBookOpen",
        "component":<Icons.AuntIconBookOpen /> 
    },
    {
        "id":36,
        "name":"book",
        "uname":"Book",
        "cname":"AuntIconBook",
        "component":<Icons.AuntIconBook /> 
    },
    {
        "id":37,
        "name":"bookmark",
        "uname":"Bookmark",
        "cname":"AuntIconBookmark",
        "component":<Icons.AuntIconBookmark /> 
    },
    {
        "id":38,
        "name":"box",
        "uname":"Box",
        "cname":"AuntIconBox",
        "component":<Icons.AuntIconBox /> 
    },
    {
        "id":39,
        "name":"briefcase",
        "uname":"Briefcase",
        "cname":"AuntIconBriefcase",
        "component":<Icons.AuntIconBriefcase /> 
    },
    {
        "id":40,
        "name":"calendar",
        "uname":"Calendar",
        "cname":"AuntIconCalendar",
        "component":<Icons.AuntIconCalendar /> 
    },
    {
        "id":41,
        "name":"camera-off",
        "uname":"CameraOff",
        "cname":"AuntIconCameraOff",
        "component":<Icons.AuntIconCameraOff /> 
    },
    {
        "id":42,
        "name":"camera",
        "uname":"Camera",
        "cname":"AuntIconCamera",
        "component":<Icons.AuntIconCamera /> 
    },
    {
        "id":43,
        "name":"cast",
        "uname":"Cast",
        "cname":"AuntIconCast",
        "component":<Icons.AuntIconCast /> 
    },
    {
        "id":44,
        "name":"check-circle",
        "uname":"CheckCircle",
        "cname":"AuntIconCheckCircle",
        "component":<Icons.AuntIconCheckCircle /> 
    },
    {
        "id":45,
        "name":"check-square",
        "uname":"CheckSquare",
        "cname":"AuntIconCheckSquare",
        "component":<Icons.AuntIconCheckSquare /> 
    },
    {
        "id":46,
        "name":"check",
        "uname":"Check",
        "cname":"AuntIconCheck",
        "component":<Icons.AuntIconCheck /> 
    },
    {
        "id":47,
        "name":"chevron-down",
        "uname":"ChevronDown",
        "cname":"AuntIconChevronDown",
        "component":<Icons.AuntIconChevronDown /> 
    },
    {
        "id":48,
        "name":"chevron-left",
        "uname":"ChevronLeft",
        "cname":"AuntIconChevronLeft",
        "component":<Icons.AuntIconChevronLeft /> 
    },
    {
        "id":49,
        "name":"chevron-right",
        "uname":"ChevronRight",
        "cname":"AuntIconChevronRight",
        "component":<Icons.AuntIconChevronRight /> 
    },
    {
        "id":50,
        "name":"chevron-up",
        "uname":"ChevronUp",
        "cname":"AuntIconChevronUp",
        "component":<Icons.AuntIconChevronUp /> 
    },
    {
        "id":51,
        "name":"chevrons-down",
        "uname":"ChevronsDown",
        "cname":"AuntIconChevronsDown",
        "component":<Icons.AuntIconChevronsDown /> 
    },
    {
        "id":52,
        "name":"chevrons-left",
        "uname":"ChevronsLeft",
        "cname":"AuntIconChevronsLeft",
        "component":<Icons.AuntIconChevronsLeft /> 
    },
    {
        "id":53,
        "name":"chevrons-right",
        "uname":"ChevronsRight",
        "cname":"AuntIconChevronsRight",
        "component":<Icons.AuntIconChevronsRight /> 
    },
    {
        "id":54,
        "name":"chevrons-up",
        "uname":"ChevronsUp",
        "cname":"AuntIconChevronsUp",
        "component":<Icons.AuntIconChevronsUp /> 
    },
    {
        "id":55,
        "name":"chrome",
        "uname":"Chrome",
        "cname":"AuntIconChrome",
        "component":<Icons.AuntIconChrome /> 
    },
    {
        "id":56,
        "name":"circle",
        "uname":"Circle",
        "cname":"AuntIconCircle",
        "component":<Icons.AuntIconCircle /> 
    },
    {
        "id":57,
        "name":"clipboard",
        "uname":"Clipboard",
        "cname":"AuntIconClipboard",
        "component":<Icons.AuntIconClipboard /> 
    },
    {
        "id":58,
        "name":"clock",
        "uname":"Clock",
        "cname":"AuntIconClock",
        "component":<Icons.AuntIconClock /> 
    },
    {
        "id":59,
        "name":"cloud-drizzle",
        "uname":"CloudDrizzle",
        "cname":"AuntIconCloudDrizzle",
        "component":<Icons.AuntIconCloudDrizzle /> 
    },
    {
        "id":60,
        "name":"cloud-lightning",
        "uname":"CloudLightning",
        "cname":"AuntIconCloudLightning",
        "component":<Icons.AuntIconCloudLightning /> 
    },
    {
        "id":61,
        "name":"cloud-off",
        "uname":"CloudOff",
        "cname":"AuntIconCloudOff",
        "component":<Icons.AuntIconCloudOff /> 
    },
    {
        "id":62,
        "name":"cloud-rain",
        "uname":"CloudRain",
        "cname":"AuntIconCloudRain",
        "component":<Icons.AuntIconCloudRain /> 
    },
    {
        "id":63,
        "name":"cloud-snow",
        "uname":"CloudSnow",
        "cname":"AuntIconCloudSnow",
        "component":<Icons.AuntIconCloudSnow /> 
    },
    {
        "id":64,
        "name":"cloud",
        "uname":"Cloud",
        "cname":"AuntIconCloud",
        "component":<Icons.AuntIconCloud /> 
    },
    {
        "id":65,
        "name":"code",
        "uname":"Code",
        "cname":"AuntIconCode",
        "component":<Icons.AuntIconCode /> 
    },
    {
        "id":66,
        "name":"codepen",
        "uname":"Codepen",
        "cname":"AuntIconCodepen",
        "component":<Icons.AuntIconCodepen /> 
    },
    {
        "id":67,
        "name":"codesandbox",
        "uname":"Codesandbox",
        "cname":"AuntIconCodesandbox",
        "component":<Icons.AuntIconCodesandbox /> 
    },
    {
        "id":68,
        "name":"coffee",
        "uname":"Coffee",
        "cname":"AuntIconCoffee",
        "component":<Icons.AuntIconCoffee /> 
    },
    {
        "id":69,
        "name":"columns",
        "uname":"Columns",
        "cname":"AuntIconColumns",
        "component":<Icons.AuntIconColumns /> 
    },
    {
        "id":70,
        "name":"command",
        "uname":"Command",
        "cname":"AuntIconCommand",
        "component":<Icons.AuntIconCommand /> 
    },
    {
        "id":71,
        "name":"compass",
        "uname":"Compass",
        "cname":"AuntIconCompass",
        "component":<Icons.AuntIconCompass /> 
    },
    {
        "id":72,
        "name":"copy",
        "uname":"Copy",
        "cname":"AuntIconCopy",
        "component":<Icons.AuntIconCopy /> 
    },
    {
        "id":73,
        "name":"corner-down-left",
        "uname":"CornerDownLeft",
        "cname":"AuntIconCornerDownLeft",
        "component":<Icons.AuntIconCornerDownLeft /> 
    },
    {
        "id":74,
        "name":"corner-down-right",
        "uname":"CornerDownRight",
        "cname":"AuntIconCornerDownRight",
        "component":<Icons.AuntIconCornerDownRight /> 
    },
    {
        "id":75,
        "name":"corner-left-down",
        "uname":"CornerLeftDown",
        "cname":"AuntIconCornerLeftDown",
        "component":<Icons.AuntIconCornerLeftDown /> 
    },
    {
        "id":76,
        "name":"corner-left-up",
        "uname":"CornerLeftUp",
        "cname":"AuntIconCornerLeftUp",
        "component":<Icons.AuntIconCornerLeftUp /> 
    },
    {
        "id":77,
        "name":"corner-right-down",
        "uname":"CornerRightDown",
        "cname":"AuntIconCornerRightDown",
        "component":<Icons.AuntIconCornerRightDown /> 
    },
    {
        "id":78,
        "name":"corner-right-up",
        "uname":"CornerRightUp",
        "cname":"AuntIconCornerRightUp",
        "component":<Icons.AuntIconCornerRightUp /> 
    },
    {
        "id":79,
        "name":"corner-up-left",
        "uname":"CornerUpLeft",
        "cname":"AuntIconCornerUpLeft",
        "component":<Icons.AuntIconCornerUpLeft /> 
    },
    {
        "id":80,
        "name":"corner-up-right",
        "uname":"CornerUpRight",
        "cname":"AuntIconCornerUpRight",
        "component":<Icons.AuntIconCornerUpRight /> 
    },
    {
        "id":81,
        "name":"cpu",
        "uname":"Cpu",
        "cname":"AuntIconCpu",
        "component":<Icons.AuntIconCpu /> 
    },
    {
        "id":82,
        "name":"credit-card",
        "uname":"CreditCard",
        "cname":"AuntIconCreditCard",
        "component":<Icons.AuntIconCreditCard /> 
    },
    {
        "id":83,
        "name":"crop",
        "uname":"Crop",
        "cname":"AuntIconCrop",
        "component":<Icons.AuntIconCrop /> 
    },
    {
        "id":84,
        "name":"crosshair",
        "uname":"Crosshair",
        "cname":"AuntIconCrosshair",
        "component":<Icons.AuntIconCrosshair /> 
    },
    {
        "id":85,
        "name":"database",
        "uname":"Database",
        "cname":"AuntIconDatabase",
        "component":<Icons.AuntIconDatabase /> 
    },
    {
        "id":86,
        "name":"delete",
        "uname":"Delete",
        "cname":"AuntIconDelete",
        "component":<Icons.AuntIconDelete /> 
    },
    {
        "id":87,
        "name":"disc",
        "uname":"Disc",
        "cname":"AuntIconDisc",
        "component":<Icons.AuntIconDisc /> 
    },
    {
        "id":88,
        "name":"divide-circle",
        "uname":"DivideCircle",
        "cname":"AuntIconDivideCircle",
        "component":<Icons.AuntIconDivideCircle /> 
    },
    {
        "id":89,
        "name":"divide-square",
        "uname":"DivideSquare",
        "cname":"AuntIconDivideSquare",
        "component":<Icons.AuntIconDivideSquare /> 
    },
    {
        "id":90,
        "name":"divide",
        "uname":"Divide",
        "cname":"AuntIconDivide",
        "component":<Icons.AuntIconDivide /> 
    },
    {
        "id":91,
        "name":"dollar-sign",
        "uname":"DollarSign",
        "cname":"AuntIconDollarSign",
        "component":<Icons.AuntIconDollarSign /> 
    },
    {
        "id":92,
        "name":"download-cloud",
        "uname":"DownloadCloud",
        "cname":"AuntIconDownloadCloud",
        "component":<Icons.AuntIconDownloadCloud /> 
    },
    {
        "id":93,
        "name":"download",
        "uname":"Download",
        "cname":"AuntIconDownload",
        "component":<Icons.AuntIconDownload /> 
    },
    {
        "id":94,
        "name":"dribbble",
        "uname":"Dribbble",
        "cname":"AuntIconDribbble",
        "component":<Icons.AuntIconDribbble /> 
    },
    {
        "id":95,
        "name":"droplet",
        "uname":"Droplet",
        "cname":"AuntIconDroplet",
        "component":<Icons.AuntIconDroplet /> 
    },
    {
        "id":96,
        "name":"edit-three",
        "uname":"EditThree",
        "cname":"AuntIconEditThree",
        "component":<Icons.AuntIconEditThree /> 
    },
    {
        "id":97,
        "name":"edit-two",
        "uname":"EditTwo",
        "cname":"AuntIconEditTwo",
        "component":<Icons.AuntIconEditTwo /> 
    },
    {
        "id":98,
        "name":"edit",
        "uname":"Edit",
        "cname":"AuntIconEdit",
        "component":<Icons.AuntIconEdit /> 
    },
    {
        "id":99,
        "name":"external-link",
        "uname":"ExternalLink",
        "cname":"AuntIconExternalLink",
        "component":<Icons.AuntIconExternalLink /> 
    },
    {
        "id":100,
        "name":"eye-off",
        "uname":"EyeOff",
        "cname":"AuntIconEyeOff",
        "component":<Icons.AuntIconEyeOff /> 
    },
    {
        "id":101,
        "name":"eye",
        "uname":"Eye",
        "cname":"AuntIconEye",
        "component":<Icons.AuntIconEye /> 
    },
    {
        "id":102,
        "name":"facebook",
        "uname":"Facebook",
        "cname":"AuntIconFacebook",
        "component":<Icons.AuntIconFacebook /> 
    },
    {
        "id":103,
        "name":"fast-forward",
        "uname":"FastForward",
        "cname":"AuntIconFastForward",
        "component":<Icons.AuntIconFastForward /> 
    },
    {
        "id":104,
        "name":"feather",
        "uname":"Feather",
        "cname":"AuntIconFeather",
        "component":<Icons.AuntIconFeather /> 
    },
    {
        "id":105,
        "name":"figma",
        "uname":"Figma",
        "cname":"AuntIconFigma",
        "component":<Icons.AuntIconFigma /> 
    },
    {
        "id":106,
        "name":"file-minus",
        "uname":"FileMinus",
        "cname":"AuntIconFileMinus",
        "component":<Icons.AuntIconFileMinus /> 
    },
    {
        "id":107,
        "name":"file-plus",
        "uname":"FilePlus",
        "cname":"AuntIconFilePlus",
        "component":<Icons.AuntIconFilePlus /> 
    },
    {
        "id":108,
        "name":"file-text",
        "uname":"FileText",
        "cname":"AuntIconFileText",
        "component":<Icons.AuntIconFileText /> 
    },
    {
        "id":109,
        "name":"file",
        "uname":"File",
        "cname":"AuntIconFile",
        "component":<Icons.AuntIconFile /> 
    },
    {
        "id":110,
        "name":"film",
        "uname":"Film",
        "cname":"AuntIconFilm",
        "component":<Icons.AuntIconFilm /> 
    },
    {
        "id":111,
        "name":"filter",
        "uname":"Filter",
        "cname":"AuntIconFilter",
        "component":<Icons.AuntIconFilter /> 
    },
    {
        "id":112,
        "name":"flag",
        "uname":"Flag",
        "cname":"AuntIconFlag",
        "component":<Icons.AuntIconFlag /> 
    },
    {
        "id":113,
        "name":"folder-minus",
        "uname":"FolderMinus",
        "cname":"AuntIconFolderMinus",
        "component":<Icons.AuntIconFolderMinus /> 
    },
    {
        "id":114,
        "name":"folder-plus",
        "uname":"FolderPlus",
        "cname":"AuntIconFolderPlus",
        "component":<Icons.AuntIconFolderPlus /> 
    },
    {
        "id":115,
        "name":"folder",
        "uname":"Folder",
        "cname":"AuntIconFolder",
        "component":<Icons.AuntIconFolder /> 
    },
    {
        "id":116,
        "name":"framer",
        "uname":"Framer",
        "cname":"AuntIconFramer",
        "component":<Icons.AuntIconFramer /> 
    },
    {
        "id":117,
        "name":"frown",
        "uname":"Frown",
        "cname":"AuntIconFrown",
        "component":<Icons.AuntIconFrown /> 
    },
    {
        "id":118,
        "name":"gift",
        "uname":"Gift",
        "cname":"AuntIconGift",
        "component":<Icons.AuntIconGift /> 
    },
    {
        "id":119,
        "name":"git-branch",
        "uname":"GitBranch",
        "cname":"AuntIconGitBranch",
        "component":<Icons.AuntIconGitBranch /> 
    },
    {
        "id":120,
        "name":"git-commit",
        "uname":"GitCommit",
        "cname":"AuntIconGitCommit",
        "component":<Icons.AuntIconGitCommit /> 
    },
    {
        "id":121,
        "name":"git-merge",
        "uname":"GitMerge",
        "cname":"AuntIconGitMerge",
        "component":<Icons.AuntIconGitMerge /> 
    },
    {
        "id":122,
        "name":"git-pull-request",
        "uname":"GitPullRequest",
        "cname":"AuntIconGitPullRequest",
        "component":<Icons.AuntIconGitPullRequest /> 
    },
    {
        "id":123,
        "name":"github",
        "uname":"Github",
        "cname":"AuntIconGithub",
        "component":<Icons.AuntIconGithub /> 
    },
    {
        "id":124,
        "name":"gitlab",
        "uname":"Gitlab",
        "cname":"AuntIconGitlab",
        "component":<Icons.AuntIconGitlab /> 
    },
    {
        "id":125,
        "name":"globe",
        "uname":"Globe",
        "cname":"AuntIconGlobe",
        "component":<Icons.AuntIconGlobe /> 
    },
    {
        "id":126,
        "name":"grid",
        "uname":"Grid",
        "cname":"AuntIconGrid",
        "component":<Icons.AuntIconGrid /> 
    },
    {
        "id":127,
        "name":"hard-drive",
        "uname":"HardDrive",
        "cname":"AuntIconHardDrive",
        "component":<Icons.AuntIconHardDrive /> 
    },
    {
        "id":128,
        "name":"hash",
        "uname":"Hash",
        "cname":"AuntIconHash",
        "component":<Icons.AuntIconHash /> 
    },
    {
        "id":129,
        "name":"headphones",
        "uname":"Headphones",
        "cname":"AuntIconHeadphones",
        "component":<Icons.AuntIconHeadphones /> 
    },
    {
        "id":130,
        "name":"heart",
        "uname":"Heart",
        "cname":"AuntIconHeart",
        "component":<Icons.AuntIconHeart /> 
    },
    {
        "id":131,
        "name":"help-circle",
        "uname":"HelpCircle",
        "cname":"AuntIconHelpCircle",
        "component":<Icons.AuntIconHelpCircle /> 
    },
    {
        "id":132,
        "name":"hexagon",
        "uname":"Hexagon",
        "cname":"AuntIconHexagon",
        "component":<Icons.AuntIconHexagon /> 
    },
    {
        "id":133,
        "name":"home",
        "uname":"Home",
        "cname":"AuntIconHome",
        "component":<Icons.AuntIconHome /> 
    },
    {
        "id":134,
        "name":"image",
        "uname":"Image",
        "cname":"AuntIconImage",
        "component":<Icons.AuntIconImage /> 
    },
    {
        "id":135,
        "name":"inbox",
        "uname":"Inbox",
        "cname":"AuntIconInbox",
        "component":<Icons.AuntIconInbox /> 
    },
    {
        "id":136,
        "name":"info",
        "uname":"Info",
        "cname":"AuntIconInfo",
        "component":<Icons.AuntIconInfo /> 
    },
    {
        "id":137,
        "name":"instagram",
        "uname":"Instagram",
        "cname":"AuntIconInstagram",
        "component":<Icons.AuntIconInstagram /> 
    },
    {
        "id":138,
        "name":"italic",
        "uname":"Italic",
        "cname":"AuntIconItalic",
        "component":<Icons.AuntIconItalic /> 
    },
    {
        "id":139,
        "name":"key",
        "uname":"Key",
        "cname":"AuntIconKey",
        "component":<Icons.AuntIconKey /> 
    },
    {
        "id":140,
        "name":"layers",
        "uname":"Layers",
        "cname":"AuntIconLayers",
        "component":<Icons.AuntIconLayers /> 
    },
    {
        "id":141,
        "name":"layout",
        "uname":"Layout",
        "cname":"AuntIconLayout",
        "component":<Icons.AuntIconLayout /> 
    },
    {
        "id":142,
        "name":"life-buoy",
        "uname":"LifeBuoy",
        "cname":"AuntIconLifeBuoy",
        "component":<Icons.AuntIconLifeBuoy /> 
    },
    {
        "id":143,
        "name":"link-two",
        "uname":"LinkTwo",
        "cname":"AuntIconLinkTwo",
        "component":<Icons.AuntIconLinkTwo /> 
    },
    {
        "id":144,
        "name":"link",
        "uname":"Link",
        "cname":"AuntIconLink",
        "component":<Icons.AuntIconLink /> 
    },
    {
        "id":145,
        "name":"linkedin",
        "uname":"Linkedin",
        "cname":"AuntIconLinkedin",
        "component":<Icons.AuntIconLinkedin /> 
    },
    {
        "id":146,
        "name":"list",
        "uname":"List",
        "cname":"AuntIconList",
        "component":<Icons.AuntIconList /> 
    },
    {
        "id":147,
        "name":"loader",
        "uname":"Loader",
        "cname":"AuntIconLoader",
        "component":<Icons.AuntIconLoader /> 
    },
    {
        "id":148,
        "name":"lock",
        "uname":"Lock",
        "cname":"AuntIconLock",
        "component":<Icons.AuntIconLock /> 
    },
    {
        "id":149,
        "name":"log-in",
        "uname":"LogIn",
        "cname":"AuntIconLogIn",
        "component":<Icons.AuntIconLogIn /> 
    },
    {
        "id":150,
        "name":"log-out",
        "uname":"LogOut",
        "cname":"AuntIconLogOut",
        "component":<Icons.AuntIconLogOut /> 
    },
    {
        "id":151,
        "name":"mail",
        "uname":"Mail",
        "cname":"AuntIconMail",
        "component":<Icons.AuntIconMail /> 
    },
    {
        "id":152,
        "name":"map-pin",
        "uname":"MapPin",
        "cname":"AuntIconMapPin",
        "component":<Icons.AuntIconMapPin /> 
    },
    {
        "id":153,
        "name":"map",
        "uname":"Map",
        "cname":"AuntIconMap",
        "component":<Icons.AuntIconMap /> 
    },
    {
        "id":154,
        "name":"maximize-two",
        "uname":"MaximizeTwo",
        "cname":"AuntIconMaximizeTwo",
        "component":<Icons.AuntIconMaximizeTwo /> 
    },
    {
        "id":155,
        "name":"maximize",
        "uname":"Maximize",
        "cname":"AuntIconMaximize",
        "component":<Icons.AuntIconMaximize /> 
    },
    {
        "id":156,
        "name":"meh",
        "uname":"Meh",
        "cname":"AuntIconMeh",
        "component":<Icons.AuntIconMeh /> 
    },
    {
        "id":157,
        "name":"menu",
        "uname":"Menu",
        "cname":"AuntIconMenu",
        "component":<Icons.AuntIconMenu /> 
    },
    {
        "id":158,
        "name":"message-circle",
        "uname":"MessageCircle",
        "cname":"AuntIconMessageCircle",
        "component":<Icons.AuntIconMessageCircle /> 
    },
    {
        "id":159,
        "name":"message-square",
        "uname":"MessageSquare",
        "cname":"AuntIconMessageSquare",
        "component":<Icons.AuntIconMessageSquare /> 
    },
    {
        "id":160,
        "name":"mic-off",
        "uname":"MicOff",
        "cname":"AuntIconMicOff",
        "component":<Icons.AuntIconMicOff /> 
    },
    {
        "id":161,
        "name":"mic",
        "uname":"Mic",
        "cname":"AuntIconMic",
        "component":<Icons.AuntIconMic /> 
    },
    {
        "id":162,
        "name":"minimize-two",
        "uname":"MinimizeTwo",
        "cname":"AuntIconMinimizeTwo",
        "component":<Icons.AuntIconMinimizeTwo /> 
    },
    {
        "id":163,
        "name":"minimize",
        "uname":"Minimize",
        "cname":"AuntIconMinimize",
        "component":<Icons.AuntIconMinimize /> 
    },
    {
        "id":164,
        "name":"minus-circle",
        "uname":"MinusCircle",
        "cname":"AuntIconMinusCircle",
        "component":<Icons.AuntIconMinusCircle /> 
    },
    {
        "id":165,
        "name":"minus-square",
        "uname":"MinusSquare",
        "cname":"AuntIconMinusSquare",
        "component":<Icons.AuntIconMinusSquare /> 
    },
    {
        "id":166,
        "name":"minus",
        "uname":"Minus",
        "cname":"AuntIconMinus",
        "component":<Icons.AuntIconMinus /> 
    },
    {
        "id":167,
        "name":"monitor",
        "uname":"Monitor",
        "cname":"AuntIconMonitor",
        "component":<Icons.AuntIconMonitor /> 
    },
    {
        "id":168,
        "name":"moon",
        "uname":"Moon",
        "cname":"AuntIconMoon",
        "component":<Icons.AuntIconMoon /> 
    },
    {
        "id":169,
        "name":"more-horizontal",
        "uname":"MoreHorizontal",
        "cname":"AuntIconMoreHorizontal",
        "component":<Icons.AuntIconMoreHorizontal /> 
    },
    {
        "id":170,
        "name":"more-vertical",
        "uname":"MoreVertical",
        "cname":"AuntIconMoreVertical",
        "component":<Icons.AuntIconMoreVertical /> 
    },
    {
        "id":171,
        "name":"mouse-pointer",
        "uname":"MousePointer",
        "cname":"AuntIconMousePointer",
        "component":<Icons.AuntIconMousePointer /> 
    },
    {
        "id":172,
        "name":"move",
        "uname":"Move",
        "cname":"AuntIconMove",
        "component":<Icons.AuntIconMove /> 
    },
    {
        "id":173,
        "name":"music",
        "uname":"Music",
        "cname":"AuntIconMusic",
        "component":<Icons.AuntIconMusic /> 
    },
    {
        "id":174,
        "name":"navigation-two",
        "uname":"NavigationTwo",
        "cname":"AuntIconNavigationTwo",
        "component":<Icons.AuntIconNavigationTwo /> 
    },
    {
        "id":175,
        "name":"navigation",
        "uname":"Navigation",
        "cname":"AuntIconNavigation",
        "component":<Icons.AuntIconNavigation /> 
    },
    {
        "id":176,
        "name":"octagon",
        "uname":"Octagon",
        "cname":"AuntIconOctagon",
        "component":<Icons.AuntIconOctagon /> 
    },
    {
        "id":177,
        "name":"package",
        "uname":"Package",
        "cname":"AuntIconPackage",
        "component":<Icons.AuntIconPackage /> 
    },
    {
        "id":178,
        "name":"paperclip",
        "uname":"Paperclip",
        "cname":"AuntIconPaperclip",
        "component":<Icons.AuntIconPaperclip /> 
    },
    {
        "id":179,
        "name":"pause-circle",
        "uname":"PauseCircle",
        "cname":"AuntIconPauseCircle",
        "component":<Icons.AuntIconPauseCircle /> 
    },
    {
        "id":180,
        "name":"pause",
        "uname":"Pause",
        "cname":"AuntIconPause",
        "component":<Icons.AuntIconPause /> 
    },
    {
        "id":181,
        "name":"pen-tool",
        "uname":"PenTool",
        "cname":"AuntIconPenTool",
        "component":<Icons.AuntIconPenTool /> 
    },
    {
        "id":182,
        "name":"percent",
        "uname":"Percent",
        "cname":"AuntIconPercent",
        "component":<Icons.AuntIconPercent /> 
    },
    {
        "id":183,
        "name":"phone-call",
        "uname":"PhoneCall",
        "cname":"AuntIconPhoneCall",
        "component":<Icons.AuntIconPhoneCall /> 
    },
    {
        "id":184,
        "name":"phone-forwarded",
        "uname":"PhoneForwarded",
        "cname":"AuntIconPhoneForwarded",
        "component":<Icons.AuntIconPhoneForwarded /> 
    },
    {
        "id":185,
        "name":"phone-incoming",
        "uname":"PhoneIncoming",
        "cname":"AuntIconPhoneIncoming",
        "component":<Icons.AuntIconPhoneIncoming /> 
    },
    {
        "id":186,
        "name":"phone-missed",
        "uname":"PhoneMissed",
        "cname":"AuntIconPhoneMissed",
        "component":<Icons.AuntIconPhoneMissed /> 
    },
    {
        "id":187,
        "name":"phone-off",
        "uname":"PhoneOff",
        "cname":"AuntIconPhoneOff",
        "component":<Icons.AuntIconPhoneOff /> 
    },
    {
        "id":188,
        "name":"phone-outgoing",
        "uname":"PhoneOutgoing",
        "cname":"AuntIconPhoneOutgoing",
        "component":<Icons.AuntIconPhoneOutgoing /> 
    },
    {
        "id":189,
        "name":"phone",
        "uname":"Phone",
        "cname":"AuntIconPhone",
        "component":<Icons.AuntIconPhone /> 
    },
    {
        "id":190,
        "name":"pie-chart",
        "uname":"PieChart",
        "cname":"AuntIconPieChart",
        "component":<Icons.AuntIconPieChart /> 
    },
    {
        "id":191,
        "name":"play-circle",
        "uname":"PlayCircle",
        "cname":"AuntIconPlayCircle",
        "component":<Icons.AuntIconPlayCircle /> 
    },
    {
        "id":192,
        "name":"play",
        "uname":"Play",
        "cname":"AuntIconPlay",
        "component":<Icons.AuntIconPlay /> 
    },
    {
        "id":193,
        "name":"plus-circle",
        "uname":"PlusCircle",
        "cname":"AuntIconPlusCircle",
        "component":<Icons.AuntIconPlusCircle /> 
    },
    {
        "id":194,
        "name":"plus-square",
        "uname":"PlusSquare",
        "cname":"AuntIconPlusSquare",
        "component":<Icons.AuntIconPlusSquare /> 
    },
    {
        "id":195,
        "name":"plus",
        "uname":"Plus",
        "cname":"AuntIconPlus",
        "component":<Icons.AuntIconPlus /> 
    },
    {
        "id":196,
        "name":"pocket",
        "uname":"Pocket",
        "cname":"AuntIconPocket",
        "component":<Icons.AuntIconPocket /> 
    },
    {
        "id":197,
        "name":"power",
        "uname":"Power",
        "cname":"AuntIconPower",
        "component":<Icons.AuntIconPower /> 
    },
    {
        "id":198,
        "name":"printer",
        "uname":"Printer",
        "cname":"AuntIconPrinter",
        "component":<Icons.AuntIconPrinter /> 
    },
    {
        "id":199,
        "name":"radio",
        "uname":"Radio",
        "cname":"AuntIconRadio",
        "component":<Icons.AuntIconRadio /> 
    },
    {
        "id":200,
        "name":"refresh-ccw",
        "uname":"RefreshCcw",
        "cname":"AuntIconRefreshCcw",
        "component":<Icons.AuntIconRefreshCcw /> 
    },
    {
        "id":201,
        "name":"refresh-cw",
        "uname":"RefreshCw",
        "cname":"AuntIconRefreshCw",
        "component":<Icons.AuntIconRefreshCw /> 
    },
    {
        "id":202,
        "name":"repeat",
        "uname":"Repeat",
        "cname":"AuntIconRepeat",
        "component":<Icons.AuntIconRepeat /> 
    },
    {
        "id":203,
        "name":"rewind",
        "uname":"Rewind",
        "cname":"AuntIconRewind",
        "component":<Icons.AuntIconRewind /> 
    },
    {
        "id":204,
        "name":"rotate-ccw",
        "uname":"RotateCcw",
        "cname":"AuntIconRotateCcw",
        "component":<Icons.AuntIconRotateCcw /> 
    },
    {
        "id":205,
        "name":"rotate-cw",
        "uname":"RotateCw",
        "cname":"AuntIconRotateCw",
        "component":<Icons.AuntIconRotateCw /> 
    },
    {
        "id":206,
        "name":"rss",
        "uname":"Rss",
        "cname":"AuntIconRss",
        "component":<Icons.AuntIconRss /> 
    },
    {
        "id":207,
        "name":"save",
        "uname":"Save",
        "cname":"AuntIconSave",
        "component":<Icons.AuntIconSave /> 
    },
    {
        "id":208,
        "name":"scissors",
        "uname":"Scissors",
        "cname":"AuntIconScissors",
        "component":<Icons.AuntIconScissors /> 
    },
    {
        "id":209,
        "name":"search",
        "uname":"Search",
        "cname":"AuntIconSearch",
        "component":<Icons.AuntIconSearch /> 
    },
    {
        "id":210,
        "name":"send",
        "uname":"Send",
        "cname":"AuntIconSend",
        "component":<Icons.AuntIconSend /> 
    },
    {
        "id":211,
        "name":"server",
        "uname":"Server",
        "cname":"AuntIconServer",
        "component":<Icons.AuntIconServer /> 
    },
    {
        "id":212,
        "name":"settings",
        "uname":"Settings",
        "cname":"AuntIconSettings",
        "component":<Icons.AuntIconSettings /> 
    },
    {
        "id":213,
        "name":"share-two",
        "uname":"ShareTwo",
        "cname":"AuntIconShareTwo",
        "component":<Icons.AuntIconShareTwo /> 
    },
    {
        "id":214,
        "name":"share",
        "uname":"Share",
        "cname":"AuntIconShare",
        "component":<Icons.AuntIconShare /> 
    },
    {
        "id":215,
        "name":"shield-off",
        "uname":"ShieldOff",
        "cname":"AuntIconShieldOff",
        "component":<Icons.AuntIconShieldOff /> 
    },
    {
        "id":216,
        "name":"shield",
        "uname":"Shield",
        "cname":"AuntIconShield",
        "component":<Icons.AuntIconShield /> 
    },
    {
        "id":217,
        "name":"shopping-bag",
        "uname":"ShoppingBag",
        "cname":"AuntIconShoppingBag",
        "component":<Icons.AuntIconShoppingBag /> 
    },
    {
        "id":218,
        "name":"shopping-cart",
        "uname":"ShoppingCart",
        "cname":"AuntIconShoppingCart",
        "component":<Icons.AuntIconShoppingCart /> 
    },
    {
        "id":219,
        "name":"shuffle",
        "uname":"Shuffle",
        "cname":"AuntIconShuffle",
        "component":<Icons.AuntIconShuffle /> 
    },
    {
        "id":220,
        "name":"sidebar",
        "uname":"Sidebar",
        "cname":"AuntIconSidebar",
        "component":<Icons.AuntIconSidebar /> 
    },
    {
        "id":221,
        "name":"skip-back",
        "uname":"SkipBack",
        "cname":"AuntIconSkipBack",
        "component":<Icons.AuntIconSkipBack /> 
    },
    {
        "id":222,
        "name":"skip-forward",
        "uname":"SkipForward",
        "cname":"AuntIconSkipForward",
        "component":<Icons.AuntIconSkipForward /> 
    },
    {
        "id":223,
        "name":"slack",
        "uname":"Slack",
        "cname":"AuntIconSlack",
        "component":<Icons.AuntIconSlack /> 
    },
    {
        "id":224,
        "name":"slash",
        "uname":"Slash",
        "cname":"AuntIconSlash",
        "component":<Icons.AuntIconSlash /> 
    },
    {
        "id":225,
        "name":"sliders",
        "uname":"Sliders",
        "cname":"AuntIconSliders",
        "component":<Icons.AuntIconSliders /> 
    },
    {
        "id":226,
        "name":"smartphone",
        "uname":"Smartphone",
        "cname":"AuntIconSmartphone",
        "component":<Icons.AuntIconSmartphone /> 
    },
    {
        "id":227,
        "name":"smile",
        "uname":"Smile",
        "cname":"AuntIconSmile",
        "component":<Icons.AuntIconSmile /> 
    },
    {
        "id":228,
        "name":"speaker",
        "uname":"Speaker",
        "cname":"AuntIconSpeaker",
        "component":<Icons.AuntIconSpeaker /> 
    },
    {
        "id":229,
        "name":"square",
        "uname":"Square",
        "cname":"AuntIconSquare",
        "component":<Icons.AuntIconSquare /> 
    },
    {
        "id":230,
        "name":"star",
        "uname":"Star",
        "cname":"AuntIconStar",
        "component":<Icons.AuntIconStar /> 
    },
    {
        "id":231,
        "name":"stop-circle",
        "uname":"StopCircle",
        "cname":"AuntIconStopCircle",
        "component":<Icons.AuntIconStopCircle /> 
    },
    {
        "id":232,
        "name":"sun",
        "uname":"Sun",
        "cname":"AuntIconSun",
        "component":<Icons.AuntIconSun /> 
    },
    {
        "id":233,
        "name":"sunrise",
        "uname":"Sunrise",
        "cname":"AuntIconSunrise",
        "component":<Icons.AuntIconSunrise /> 
    },
    {
        "id":234,
        "name":"sunset",
        "uname":"Sunset",
        "cname":"AuntIconSunset",
        "component":<Icons.AuntIconSunset /> 
    },
    {
        "id":235,
        "name":"table",
        "uname":"Table",
        "cname":"AuntIconTable",
        "component":<Icons.AuntIconTable /> 
    },
    {
        "id":236,
        "name":"tablet",
        "uname":"Tablet",
        "cname":"AuntIconTablet",
        "component":<Icons.AuntIconTablet /> 
    },
    {
        "id":237,
        "name":"tag",
        "uname":"Tag",
        "cname":"AuntIconTag",
        "component":<Icons.AuntIconTag /> 
    },
    {
        "id":238,
        "name":"target",
        "uname":"Target",
        "cname":"AuntIconTarget",
        "component":<Icons.AuntIconTarget /> 
    },
    {
        "id":239,
        "name":"terminal",
        "uname":"Terminal",
        "cname":"AuntIconTerminal",
        "component":<Icons.AuntIconTerminal /> 
    },
    {
        "id":240,
        "name":"thermometer",
        "uname":"Thermometer",
        "cname":"AuntIconThermometer",
        "component":<Icons.AuntIconThermometer /> 
    },
    {
        "id":241,
        "name":"thumbs-down",
        "uname":"ThumbsDown",
        "cname":"AuntIconThumbsDown",
        "component":<Icons.AuntIconThumbsDown /> 
    },
    {
        "id":242,
        "name":"thumbs-up",
        "uname":"ThumbsUp",
        "cname":"AuntIconThumbsUp",
        "component":<Icons.AuntIconThumbsUp /> 
    },
    {
        "id":243,
        "name":"toggle-left",
        "uname":"ToggleLeft",
        "cname":"AuntIconToggleLeft",
        "component":<Icons.AuntIconToggleLeft /> 
    },
    {
        "id":244,
        "name":"toggle-right",
        "uname":"ToggleRight",
        "cname":"AuntIconToggleRight",
        "component":<Icons.AuntIconToggleRight /> 
    },
    {
        "id":245,
        "name":"tool",
        "uname":"Tool",
        "cname":"AuntIconTool",
        "component":<Icons.AuntIconTool /> 
    },
    {
        "id":246,
        "name":"trash-two",
        "uname":"TrashTwo",
        "cname":"AuntIconTrashTwo",
        "component":<Icons.AuntIconTrashTwo /> 
    },
    {
        "id":247,
        "name":"trash",
        "uname":"Trash",
        "cname":"AuntIconTrash",
        "component":<Icons.AuntIconTrash /> 
    },
    {
        "id":248,
        "name":"trello",
        "uname":"Trello",
        "cname":"AuntIconTrello",
        "component":<Icons.AuntIconTrello /> 
    },
    {
        "id":249,
        "name":"trending-down",
        "uname":"TrendingDown",
        "cname":"AuntIconTrendingDown",
        "component":<Icons.AuntIconTrendingDown /> 
    },
    {
        "id":250,
        "name":"trending-up",
        "uname":"TrendingUp",
        "cname":"AuntIconTrendingUp",
        "component":<Icons.AuntIconTrendingUp /> 
    },
    {
        "id":251,
        "name":"triangle",
        "uname":"Triangle",
        "cname":"AuntIconTriangle",
        "component":<Icons.AuntIconTriangle /> 
    },
    {
        "id":252,
        "name":"truck",
        "uname":"Truck",
        "cname":"AuntIconTruck",
        "component":<Icons.AuntIconTruck /> 
    },
    {
        "id":253,
        "name":"tv",
        "uname":"Tv",
        "cname":"AuntIconTv",
        "component":<Icons.AuntIconTv /> 
    },
    {
        "id":254,
        "name":"twitch",
        "uname":"Twitch",
        "cname":"AuntIconTwitch",
        "component":<Icons.AuntIconTwitch /> 
    },
    {
        "id":255,
        "name":"twitter",
        "uname":"Twitter",
        "cname":"AuntIconTwitter",
        "component":<Icons.AuntIconTwitter /> 
    },
    {
        "id":256,
        "name":"type",
        "uname":"Type",
        "cname":"AuntIconType",
        "component":<Icons.AuntIconType /> 
    },
    {
        "id":257,
        "name":"umbrella",
        "uname":"Umbrella",
        "cname":"AuntIconUmbrella",
        "component":<Icons.AuntIconUmbrella /> 
    },
    {
        "id":258,
        "name":"underline",
        "uname":"Underline",
        "cname":"AuntIconUnderline",
        "component":<Icons.AuntIconUnderline /> 
    },
    {
        "id":259,
        "name":"unlock",
        "uname":"Unlock",
        "cname":"AuntIconUnlock",
        "component":<Icons.AuntIconUnlock /> 
    },
    {
        "id":260,
        "name":"upload-cloud",
        "uname":"UploadCloud",
        "cname":"AuntIconUploadCloud",
        "component":<Icons.AuntIconUploadCloud /> 
    },
    {
        "id":261,
        "name":"upload",
        "uname":"Upload",
        "cname":"AuntIconUpload",
        "component":<Icons.AuntIconUpload /> 
    },
    {
        "id":262,
        "name":"user-check",
        "uname":"UserCheck",
        "cname":"AuntIconUserCheck",
        "component":<Icons.AuntIconUserCheck /> 
    },
    {
        "id":263,
        "name":"user-minus",
        "uname":"UserMinus",
        "cname":"AuntIconUserMinus",
        "component":<Icons.AuntIconUserMinus /> 
    },
    {
        "id":264,
        "name":"user-plus",
        "uname":"UserPlus",
        "cname":"AuntIconUserPlus",
        "component":<Icons.AuntIconUserPlus /> 
    },
    {
        "id":265,
        "name":"user-x",
        "uname":"UserX",
        "cname":"AuntIconUserX",
        "component":<Icons.AuntIconUserX /> 
    },
    {
        "id":266,
        "name":"user",
        "uname":"User",
        "cname":"AuntIconUser",
        "component":<Icons.AuntIconUser /> 
    },
    {
        "id":267,
        "name":"users",
        "uname":"Users",
        "cname":"AuntIconUsers",
        "component":<Icons.AuntIconUsers /> 
    },
    {
        "id":268,
        "name":"video-off",
        "uname":"VideoOff",
        "cname":"AuntIconVideoOff",
        "component":<Icons.AuntIconVideoOff /> 
    },
    {
        "id":269,
        "name":"video",
        "uname":"Video",
        "cname":"AuntIconVideo",
        "component":<Icons.AuntIconVideo /> 
    },
    {
        "id":270,
        "name":"voicemail",
        "uname":"Voicemail",
        "cname":"AuntIconVoicemail",
        "component":<Icons.AuntIconVoicemail /> 
    },
    {
        "id":271,
        "name":"volume-one",
        "uname":"VolumeOne",
        "cname":"AuntIconVolumeOne",
        "component":<Icons.AuntIconVolumeOne /> 
    },
    {
        "id":272,
        "name":"volume-two",
        "uname":"VolumeTwo",
        "cname":"AuntIconVolumeTwo",
        "component":<Icons.AuntIconVolumeTwo /> 
    },
    {
        "id":273,
        "name":"volume-x",
        "uname":"VolumeX",
        "cname":"AuntIconVolumeX",
        "component":<Icons.AuntIconVolumeX /> 
    },
    {
        "id":274,
        "name":"volume",
        "uname":"Volume",
        "cname":"AuntIconVolume",
        "component":<Icons.AuntIconVolume /> 
    },
    {
        "id":275,
        "name":"watch",
        "uname":"Watch",
        "cname":"AuntIconWatch",
        "component":<Icons.AuntIconWatch /> 
    },
    {
        "id":276,
        "name":"wifi-off",
        "uname":"WifiOff",
        "cname":"AuntIconWifiOff",
        "component":<Icons.AuntIconWifiOff /> 
    },
    {
        "id":277,
        "name":"wifi",
        "uname":"Wifi",
        "cname":"AuntIconWifi",
        "component":<Icons.AuntIconWifi /> 
    },
    {
        "id":278,
        "name":"wind",
        "uname":"Wind",
        "cname":"AuntIconWind",
        "component":<Icons.AuntIconWind /> 
    },
    {
        "id":279,
        "name":"x-circle",
        "uname":"XCircle",
        "cname":"AuntIconXCircle",
        "component":<Icons.AuntIconXCircle /> 
    },
    {
        "id":280,
        "name":"x-octagon",
        "uname":"XOctagon",
        "cname":"AuntIconXOctagon",
        "component":<Icons.AuntIconXOctagon /> 
    },
    {
        "id":281,
        "name":"x-square",
        "uname":"XSquare",
        "cname":"AuntIconXSquare",
        "component":<Icons.AuntIconXSquare /> 
    },
    {
        "id":282,
        "name":"x",
        "uname":"X",
        "cname":"AuntIconX",
        "component":<Icons.AuntIconX /> 
    },
    {
        "id":283,
        "name":"youtube",
        "uname":"Youtube",
        "cname":"AuntIconYoutube",
        "component":<Icons.AuntIconYoutube /> 
    },
    {
        "id":284,
        "name":"zap-off",
        "uname":"ZapOff",
        "cname":"AuntIconZapOff",
        "component":<Icons.AuntIconZapOff /> 
    },
    {
        "id":285,
        "name":"zap",
        "uname":"Zap",
        "cname":"AuntIconZap",
        "component":<Icons.AuntIconZap /> 
    },
    {
        "id":286,
        "name":"zoom-in",
        "uname":"ZoomIn",
        "cname":"AuntIconZoomIn",
        "component":<Icons.AuntIconZoomIn /> 
    },
    {
        "id":287,
        "name":"zoom-out",
        "uname":"ZoomOut",
        "cname":"AuntIconZoomOut",
        "component":<Icons.AuntIconZoomOut /> 
    }
];

function Demo (){
    const [copyCode] = useCopy();
    const handleIconClick = (name: string) => {
        copyCode(name);
    };

    return <div className="demo-icon">
        <p>全部图标</p>
        <div className="demo-icon-content">
            {
                iconsList.map((item)=>{
                    return  <div
                        className="demo-icon-card"  
                        style={{
                            width:100,
                            height:100
                        }}
                        key={item.id}
                        onClick={()=>{
                            handleIconClick(item.cname);
                        }}
                    > 
                    { React.cloneElement(item.component,{ style:{
                        width:30,
                        height:30,
                    } }) } 
                    <span style={{
                        fontSize:10,
                        paddingTop:15
                    }}>{item.uname}</span> </div>;
                })
            }
        </div>
    </div>;
}

export default Demo;