// Mouse gradient effect
const mouseGradient = document.getElementById('mouseGradient');
let mouseX = 0;
let mouseY = 0;
let gradientX = 0;
let gradientY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.addEventListener('mouseenter', () => {
    mouseGradient.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    mouseGradient.style.opacity = '0';
});

function animate() {
    gradientX += (mouseX - gradientX) * 0.15;
    gradientY += (mouseY - gradientY) * 0.15;
    mouseGradient.style.left = gradientX + 'px';
    mouseGradient.style.top = gradientY + 'px';
    requestAnimationFrame(animate);
}
animate();

// Matrix effect for loading overlay
function initMatrixEffect() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const gradient = ctx.createLinearGradient(0, drops[i] * fontSize, 0, (drops[i] + 10) * fontSize);
            gradient.addColorStop(0, '#60a5fa');
            gradient.addColorStop(0.5, '#a78bfa');
            gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
            
            ctx.fillStyle = gradient;
            
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    let matrixInterval;
    return {
        start: () => {
            matrixInterval = setInterval(drawMatrix, 33);
        },
        stop: () => {
            clearInterval(matrixInterval);
        }
    };
}

// Project data
const projectData = {
    'acmg': {
        title: 'Quotation Tracking for ACMG and CSD',
        subtitle: 'Centralized Odoo-based system to manage inquiries, quotations, orders, and reports for ACMG and regional sales teams.',
        sections: [
            {
                title: 'Overview',
                content: 'The quotation tracking system was the first fully Odoo‑based workflow implemented for the sales and ACMG teams, replacing the old Excel‑driven process with a shared cloud workspace for managing quotations in real time. It centralizes every quote in a single platform where team members can collaborate, update status, and immediately see which opportunities are open, won, or lost without juggling multiple files. Built‑in reporting and filtering allow users to generate up‑to‑date performance and pipeline reports in seconds, eliminating the manual effort of sorting spreadsheets and compiling data for hours.'
            },
            // {
            //     title: 'Product Gallery',
            //     type: 'gallery',
            //     images: [
            //         { src: 'https://via.placeholder.com/600x400?text=Product+Image+1', alt: 'Product Image 1' },
            //         { src: 'https://via.placeholder.com/600x400?text=Product+Image+2', alt: 'Product Image 2' },
            //         { src: 'https://via.placeholder.com/600x400?text=Product+Image+3', alt: 'Product Image 3' }
            //     ]
            // },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Quotation Tracking/Creating New Records.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'ACMG TEAM' },
                    { icon: '👨‍💼', name: 'CSD TEAM' },
                    { icon: '👨‍💼', name: 'AKAI & AKIC' },
                    { icon: '👨‍💼', name: 'Regional Sales' }
                ]
            },
            {
                title: 'Business Impact',
                content: '100% quotations from Adage Regional Sales are routed through Odoo'
            }
        ]
    },
    'sales-crm': {
        title: 'Odoo for Sales (CRM & Sales)',
        subtitle: 'Advanced CRM platform for comprehensive sales operations',
        sections: [
            {
                title: 'Overview',
                content: 'Odoo for Sales provides a complete 360-degree view of customer interactions, opportunities, and sales performance. Built on Odoo, this platform empowers sales teams with the tools they need to close deals faster and build stronger customer relationships.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=CRM+Dashboard', alt: 'CRM Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Sales+Pipeline', alt: 'Sales Pipeline' },
                    { src: 'https://via.placeholder.com/600x400?text=Customer+Insights', alt: 'Customer Insights' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Results',
                content: 'The CRM implementation has led to a 40% improvement in lead conversion rates, 30% increase in sales team productivity, and enhanced visibility into sales performance across all divisions. Sales managers now have real-time dashboards for coaching and performance improvement.'
            }
        ]
    },
    'csd': {
        title: 'Odoo for CSD (Sales)',
        subtitle: 'Specialized solution for Customer Service Division sales',
        sections: [
            {
                title: 'Overview',
                content: 'Odoo for CSD is specifically tailored to meet the unique requirements of service-based sales. This custom Odoo implementation includes specialized workflows, pricing structures, and reporting capabilities designed for the Customer Service Division\'s business model.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=CSD+Sales+Dashboard', alt: 'CSD Sales Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Customer+Service+Workflow', alt: 'Customer Service Workflow' },
                    { src: 'https://via.placeholder.com/600x400?text=Service+Pricing+Structure', alt: 'Service Pricing Structure' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Business Impact',
                content: 'CSD has achieved 45% faster quote generation, 25% improvement in contract renewal rates, and significantly enhanced customer retention through better service tracking and proactive engagement.'
            }
        ]
    },
    'service-rfq': {
        title: 'Odoo for Service Engineers (Website Form RFQ)',
        subtitle: 'Streamlined request management for field service teams',
        sections: [
            {
                title: 'Overview',
                content: 'The Service Engineers RFQ Portal provides a user-friendly web interface for field service engineers to submit, track, and manage requests for quotations. This system bridges the gap between field operations and back-office sales teams, ensuring rapid response times and accurate pricing.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=RFQ+Portal+Interface', alt: 'RFQ Portal Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=Request+Submission+Form', alt: 'Request Submission Form' },
                    { src: 'https://via.placeholder.com/600x400?text=Quote+Tracking+Dashboard', alt: 'Quote Tracking Dashboard' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Results',
                content: 'Service engineers report 60% faster RFQ submission times, while sales teams have reduced quotation turnaround by 50%. The portal has eliminated lost or misplaced requests and improved overall service responsiveness.'
            }
        ]
    },
    'safety': {
        title: 'Safety Meetings Odoo Custom Module',
        subtitle: 'Comprehensive solution for workplace safety compliance',
        sections: [
            {
                title: 'Overview',
                content: 'The Safety Meetings Custom Module helps organizations maintain compliance with safety regulations while fostering a culture of workplace safety. Built as an Odoo extension, this module provides end-to-end management of safety meetings, training, and incident reporting.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Safety+Meeting+Dashboard', alt: 'Safety Meeting Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Incident+Reporting+Form', alt: 'Incident Reporting Form' },
                    { src: 'https://via.placeholder.com/600x400?text=Training+Compliance+Tracker', alt: 'Training Compliance Tracker' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'D:/Adage Website/ADA-2025-Website-main/ADA-2025-Website-main/Safety Meetings Guide.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Business Impact',
                content: 'The module has improved safety meeting attendance by 85%, reduced administrative time by 70%, and provided management with comprehensive safety metrics for continuous improvement initiatives.'
            }
        ]
    },
    'quotation': {
        title: 'Quotation Generation from Odoo',
        subtitle: 'Intelligent system for professional quotation creation',
        sections: [
            {
                title: 'Overview',
                content: 'The Quotation Generation system (yet to launch) will revolutionize how quotations are created and managed. By pulling data directly from Odoo, this system will generate professional, branded quotations with accurate pricing, terms, and conditions in minutes instead of hours.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Quotation+Template+Designer', alt: 'Quotation Template Designer' },
                    { src: 'https://via.placeholder.com/600x400?text=Automated+Pricing+Engine', alt: 'Automated Pricing Engine' },
                    { src: 'https://via.placeholder.com/600x400?text=Quote+Approval+Workflow', alt: 'Quote Approval Workflow' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Expected Benefits',
                content: 'We anticipate 80% reduction in quotation preparation time, elimination of pricing errors, consistent professional formatting across all quotes, and improved win rates through faster response times to customer requests.'
            }
        ]
    },
    'dew-bubble': {
        title: 'Dew Point & Bubble Point Calculation Python Script',
        subtitle: 'Precision engineering calculations for process design',
        sections: [
            {
                title: 'Overview',
                content: 'The Dew Point & Bubble Point Calculator is a specialized engineering tool that performs thermodynamic calculations essential for process equipment design and specification. This application supports engineers in accurately determining phase equilibrium conditions for various gas mixtures.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Thermodynamic+Calculator+Interface', alt: 'Thermodynamic Calculator Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=Phase+Equilibrium+Chart', alt: 'Phase Equilibrium Chart' },
                    { src: 'https://via.placeholder.com/600x400?text=Process+Design+Output', alt: 'Process Design Output' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Business Impact',
                content: 'Engineers have reduced calculation time by 90% while improving accuracy. The tool has become essential for equipment sizing, process optimization, and customer technical support.'
            }
        ]
    },
    'lag-pressure': {
        title: 'Lag Time & Pressure Drop Calculation Python Script',
        subtitle: 'Advanced system analysis for pipeline design',
        sections: [
            {
                title: 'Overview',
                content: 'This calculation tool helps engineers analyze system dynamics, including lag times and pressure drops across pipelines and equipment. Critical for system design and troubleshooting, it ensures optimal performance and safety in pneumatic and process systems.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Pipeline+Analysis+Tool', alt: 'Pipeline Analysis Tool' },
                    { src: 'https://via.placeholder.com/600x400?text=Pressure+Drop+Calculator', alt: 'Pressure Drop Calculator' },
                    { src: 'https://via.placeholder.com/600x400?text=System+Dynamics+Visualization', alt: 'System Dynamics Visualization' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Results',
                content: 'The tool has accelerated engineering workflows by 75%, reduced design iterations, and helped prevent costly field modifications through more accurate initial designs.'
            }
        ]
    },
    'auction': {
        title: 'Auction Custom Software for Adage Day',
        subtitle: 'Interactive bidding system for company celebrations',
        sections: [
            {
                title: 'Overview',
                content: 'Developed specifically for Adage Day 2025, this auction platform created an engaging and exciting experience for employees. The system managed item listings, real-time bidding, and automated winner selection, making the event memorable and successful.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Auction+Dashboard', alt: 'Auction Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Real-time+Bidding+Interface', alt: 'Real-time Bidding Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=Winner+Notification+System', alt: 'Winner Notification System' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Event Success',
                content: 'The platform facilitated over 500 bids across 50 items during Adage Day 2025, with 100% uptime and enthusiastic participation from employees. The success has led to requests for similar platforms for future company events.'
            }
        ]
    },
    'intellidas': {
        title: 'IntelliDAS Software',
        subtitle: 'Next-generation data acquisition system (Not yet launched)',
        sections: [
            {
                title: 'Overview',
                content: 'IntelliDAS represents our entry into intelligent data acquisition and analysis solutions. This software will provide advanced algorithms and machine learning capabilities to ensure optimal performance and insights.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Data+Acquisition+Interface', alt: 'Data Acquisition Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=ML+Analytics+Dashboard', alt: 'ML Analytics Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Performance+Insights+Report', alt: 'Performance Insights Report' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Market Opportunity',
                content: 'IntelliDAS will position us in the growing market for intelligent data solutions, addressing the increasing demand for advanced analytics in business operations.'
            }
        ]
    },
    'sap-search': {
        title: 'SAP Smart Item Search',
        subtitle: 'AI-powered inventory search and discovery (Not yet launched)',
        sections: [
            {
                title: 'Overview',
                content: 'SAP Smart Item Search (not yet launched) will transform how users interact with SAP inventory data. Using natural language processing and intelligent search algorithms, this tool will make finding the right items faster and more intuitive than ever before.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=NLP+Search+Interface', alt: 'NLP Search Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=Inventory+Discovery+Tool', alt: 'Inventory Discovery Tool' },
                    { src: 'https://via.placeholder.com/600x400?text=Smart+Recommendations+Engine', alt: 'Smart Recommendations Engine' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Expected Impact',
                content: 'We anticipate reducing item search time by 70%, decreasing incorrect item selections by 85%, and significantly improving user satisfaction with SAP interactions.'
            }
        ]
    },
    'newsletter': {
        title: 'Adage Connect Newsletter',
        subtitle: 'Engaging internal communications platform',
        sections: [
            {
                title: 'Overview',
                content: 'Adage Connect Newsletter keeps our entire organization informed and engaged. This digital platform delivers company news, employee achievements, upcoming events, and important updates in a visually appealing and easily digestible format.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Newsletter+Template+Designer', alt: 'Newsletter Template Designer' },
                    { src: 'https://via.placeholder.com/600x400?text=Content+Management+System', alt: 'Content Management System' },
                    { src: 'https://via.placeholder.com/600x400?text=Engagement+Analytics+Dashboard', alt: 'Engagement Analytics Dashboard' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Engagement Results',
                content: 'Since launch, Adage Connect has achieved 85% regular readership, with employees spending an average of 8 minutes per newsletter edition. The platform has become a vital tool for maintaining company culture and keeping everyone connected.'
            }
        ]
    },
    'adage-day-app': {
        title: 'Adage Day 2025 Webapp',
        subtitle: 'Complete event management solution',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage Day 2025 Webapp served as the central hub for our annual company celebration. From registration to real-time event updates, this comprehensive platform ensured every aspect of the event ran smoothly and kept participants engaged throughout the day.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Event+Registration+Portal', alt: 'Event Registration Portal' },
                    { src: 'https://via.placeholder.com/600x400?text=Real-time+Updates+Feed', alt: 'Real-time Updates Feed' },
                    { src: 'https://via.placeholder.com/600x400?text=Activity+Management+Dashboard', alt: 'Activity Management Dashboard' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Event Success',
                content: 'The app was used by 95% of attendees, facilitating over 1,200 registrations across various activities. Real-time updates kept everyone informed, and the social features generated tremendous engagement and memorable moments.'
            }
        ]
    },
    'frontdesk': {
        title: 'Frontdesk Application for AKAI/AKIC in Odoo',
        subtitle: 'Modern visitor and access management system',
        sections: [
            {
                title: 'Overview',
                content: 'The Frontdesk Application revolutionizes visitor management at our AKAI and AKIC facilities. This comprehensive system handles visitor registration, badge printing, host notifications, and access control, ensuring security while providing a professional visitor experience.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Visitor+Registration+System', alt: 'Visitor Registration System' },
                    { src: 'https://via.placeholder.com/600x400?text=Badge+Printing+Interface', alt: 'Badge Printing Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=Access+Control+Dashboard', alt: 'Access Control Dashboard' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Business Impact',
                content: 'The system has reduced visitor check-in time by 75%, improved security compliance, and created a more professional first impression. Reception staff report 60% less administrative burden, allowing them to focus on hospitality and support.'
            }
        ]
    },
    'interactive-screen': {
        title: 'Interactive Screen for Exhibitions',
        subtitle: 'Dynamic information displays for common areas',
        sections: [
            {
                title: 'Overview',
                content: 'The Interactive Screen solution transforms ordinary displays into engaging information hubs. Deployed in office lobbies and exhibition spaces, these screens showcase real-time company metrics, announcements, news, and motivational content in an eye-catching format.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Interactive+Display+Interface', alt: 'Interactive Display Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=Real-time+Metrics+Dashboard', alt: 'Real-time Metrics Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Content+Management+System', alt: 'Content Management System' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Results',
                content: 'The screens have become focal points in our facilities, keeping employees informed and motivated. Surveys show 90% of employees regularly view the screens, and the displays have significantly improved awareness of company performance and news.'
            }
        ]
    },
    'website': {
        title: 'Adage-Kanoo Website',
        subtitle: 'Modern digital presence for partnership',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage-Kanoo Website represents our partnership with a modern, professional digital presence. Featuring responsive design, compelling content, and integrated inquiry management, the site effectively showcases our joint capabilities and facilitates customer engagement.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Responsive+Website+Design', alt: 'Responsive Website Design' },
                    { src: 'https://via.placeholder.com/600x400?text=Inquiry+Management+System', alt: 'Inquiry Management System' },
                    { src: 'https://via.placeholder.com/600x400?text=Partnership+Showcase+Page', alt: 'Partnership Showcase Page' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Business Impact',
                content: 'Since launch, the website has generated 40% more qualified leads, reduced customer inquiry response time by 50%, and significantly enhanced our professional image in the market.'
            }
        ]
    },
    'project-mgmt': {
        title: 'Project Management for SBU Team in Odoo',
        subtitle: 'Comprehensive project tracking and collaboration',
        sections: [
            {
                title: 'Overview',
                content: 'The Project Management system empowers SBU teams to plan, execute, and track projects with unprecedented visibility and control. From initial planning through completion, every aspect of project delivery is managed efficiently in one integrated Odoo platform.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Project+Planning+Dashboard', alt: 'Project Planning Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Task+Tracking+Interface', alt: 'Task Tracking Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=Resource+Allocation+Tool', alt: 'Resource Allocation Tool' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Results',
                content: 'Project teams report 45% improvement in on-time delivery, 35% better resource utilization, and significantly enhanced visibility into project health and risks. Management appreciates the real-time dashboard views of all active projects.'
            }
        ]
    },
    'doc-mgmt': {
        title: 'Product Document Management for SBU 2 in Odoo',
        subtitle: 'Centralized documentation with version control',
        sections: [
            {
                title: 'Overview',
                content: 'The Product Document Management system provides SBU 2 with a centralized repository for all product-related documentation. With robust version control, access management, and powerful search capabilities, teams can find and share information effortlessly.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Document+Repository+Interface', alt: 'Document Repository Interface' },
                    { src: 'https://via.placeholder.com/600x400?text=Version+Control+System', alt: 'Version Control System' },
                    { src: 'https://via.placeholder.com/600x400?text=Advanced+Search+Engine', alt: 'Advanced Search Engine' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Business Impact',
                content: 'Document retrieval time has decreased by 80%, version confusion has been eliminated, and audit compliance has improved significantly. Teams collaborate more effectively with confidence they\'re working from current documents.'
            }
        ]
    },
    'dashboards': {
        title: 'Dashboards and Reporting in Odoo',
        subtitle: 'Real-time business intelligence across operations',
        sections: [
            {
                title: 'Overview',
                content: 'The comprehensive Dashboards and Reporting solution provides real-time visibility into business performance across all functions. From sales and operations to finance and HR, stakeholders have instant access to the metrics that matter most to their roles.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Business+Intelligence+Dashboard', alt: 'Business Intelligence Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Real-time+Reporting+System', alt: 'Real-time Reporting System' },
                    { src: 'https://via.placeholder.com/600x400?text=KPI+Tracking+Interface', alt: 'KPI Tracking Interface' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Results',
                content: 'Decision-making speed has improved by 50%, report preparation time reduced by 90%, and executives have gained unprecedented visibility into real-time business performance. Data-driven decision making has become the norm across the organization.'
            }
        ]
    },
    'field-service': {
        title: 'Field Service in Odoo',
        subtitle: 'Mobile solution for service operations excellence (Yet to launch)',
        sections: [
            {
                title: 'Overview',
                content: 'The upcoming Field Service system (yet to launch) will revolutionize how we manage field service operations. From intelligent scheduling to mobile work orders and GPS tracking, this comprehensive solution will optimize every aspect of field service delivery.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Mobile+Work+Order+App', alt: 'Mobile Work Order App' },
                    { src: 'https://via.placeholder.com/600x400?text=GPS+Tracking+Dashboard', alt: 'GPS Tracking Dashboard' },
                    { src: 'https://via.placeholder.com/600x400?text=Intelligent+Scheduling+System', alt: 'Intelligent Scheduling System' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Expected Benefits',
                content: 'We anticipate 30% more service calls per technician per day, 25% reduction in travel time, 50% faster invoicing, and significantly improved first-time fix rates through better preparation and information access.'
            }
        ]
    },
    'recruitment': {
        title: 'Recruitment in Odoo',
        subtitle: 'Streamlined hiring from posting to onboarding (Yet to launch)',
        sections: [
            {
                title: 'Overview',
                content: 'The Recruitment system (yet to launch) will transform our hiring process with an integrated Odoo system managing everything from job posting through candidate onboarding. Automated workflows, AI-assisted screening, and collaborative evaluation will make hiring faster and more effective.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'https://via.placeholder.com/600x400?text=Job+Posting+Platform', alt: 'Job Posting Platform' },
                    { src: 'https://via.placeholder.com/600x400?text=AI+Candidate+Screening', alt: 'AI Candidate Screening' },
                    { src: 'https://via.placeholder.com/600x400?text=Onboarding+Workflow+System', alt: 'Onboarding Workflow System' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Expected Impact',
                content: 'We expect to reduce time-to-hire by 40%, improve candidate quality through better screening, enhance candidate experience with faster communication, and provide management with better hiring analytics and predictions.'
            }
        ]
    },
    'elearning': {
        title: 'Odoo eLearning',
        subtitle: 'Comprehensive online training and development (Not yet launched)',
        sections: [
            {
                title: 'Overview',
                content: 'The eLearning Platform (not yet launched) will provide employees with flexible, engaging online training opportunities. Supporting various learning formats, tracking progress, and managing certifications, this system will foster continuous learning and skill development across the organization.'
            },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Account Executives' },
                    { icon: '📋', name: 'Operations Team' },
                    { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Expected Impact',
                content: 'We expect to increase training accessibility by 90%, reduce onboarding time by 40%, improve employee engagement and retention through continuous learning opportunities, and provide better tracking of skill development across the organization.'
            }
        ]
    }
};

// Initialize matrix effect
const matrixEffect = initMatrixEffect();

// Show loading overlay on page load
window.addEventListener('load', () => {
    const matrixOverlay = document.getElementById('matrixOverlay');
    const mainContainer = document.getElementById('mainContainer');
    
    if (!matrixOverlay) return;
    
    // Show the loading overlay
    matrixOverlay.classList.add('active');
    matrixEffect.start();
    
    // Hide after 3 seconds
    setTimeout(() => {
        matrixOverlay.classList.remove('active');
        matrixEffect.stop();
    }, 3000);
});

// Open project detail page with matrix animation
function openProject(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;
    
    const matrixOverlay = document.getElementById('matrixOverlay');
    
    // Show matrix overlay
    matrixOverlay.classList.add('active');
    matrixEffect.start();
    
    // Load project after animation
    setTimeout(() => {
        const detailPage = document.getElementById('projectDetailPage');
        const mainContainer = document.getElementById('mainContainer');
        
        // Build HTML for detail page
        let html = `
            <div class="detail-header">
                <button class="back-button" onclick="closeProject()">← Back</button>
                <h2 class="detail-title">${project.title}</h2>
                <p class="detail-subtitle">${project.subtitle}</p>
            </div>
            <div class="detail-content">
        `;
        
        // Add sections
        // Side by side for Utilized By and Business Impact
        let utilizedIndex = project.sections.findIndex(s => s.title === 'Utilized By' || s.title === 'Utilized by');
        let impactIndex = project.sections.findIndex(s => s.title === 'Business Impact' || s.title === 'Results');
        
        if (utilizedIndex !== -1 && impactIndex !== -1) {
            html += `
                <div class="side-by-side">
                    <div class="detail-section">
                        <h3>${project.sections[utilizedIndex].title}</h3>
            `;
            
            if (project.sections[utilizedIndex].utilized) {
                html += `<div class="utilized-list">`;
                project.sections[utilizedIndex].utilized.forEach(util => {
                    html += `
                        <div class="utilized-item">
                            <div class="utilized-icon">${util.icon}</div>
                            <div class="utilized-name">${util.name}</div>
                        </div>
                    `;
                });
                html += `</div>`;
            }
            
            html += `
                    </div>
                    <div class="detail-section">
                        <h3>${project.sections[impactIndex].title}</h3>
                        <p>${project.sections[impactIndex].content}</p>
                    </div>
                </div>
            `;
        }
        
        // Render Overview
        html += `
            <div class="detail-section overview-section">
                <h3>${project.sections[0].title}</h3>
                <p>${project.sections[0].content}</p>
            </div>
        `;

        // Find gallery/pdf sections by type (don't rely on fixed indexes)
        const gallerySection = project.sections.find(s => s && s.type === 'gallery');
        const pdfSection = project.sections.find(s => s && s.type === 'pdf');

        // Render Gallery if present
        if (gallerySection) {
            html += `
                <div class="detail-section">
                    <h3>${gallerySection.title}</h3>
                    <div class="gallery-container">
                        <div class="slideshow">
            `;
            gallerySection.images.forEach((img, index) => {
                html += `<img src="${img.src}" alt="${img.alt}" class="slide ${index === 0 ? 'active' : ''}">`;
            });
            html += `
                        </div>
                        <button class="prev" onclick="changeSlide(-1)">❮</button>
                        <button class="next" onclick="changeSlide(1)">❯</button>
                    </div>
                </div>
            `;
        }

        // Render PDF if present
        if (pdfSection) {
            html += `
                <div class="detail-section">
                    <h3>${pdfSection.title}</h3>
                    <iframe src="${pdfSection.url}" width="100%" height="600px" style="border: none;"></iframe>
                </div>
            `;
        }
        
        html += `</div>`;
        
        detailPage.innerHTML = html;
        
        // Hide matrix overlay and show detail page
        matrixOverlay.classList.remove('active');
        matrixEffect.stop();
        detailPage.classList.add('active');
        mainContainer.style.display = 'none';
        
        // Scroll to top
        window.scrollTo(0, 0);
    }, 2000);
}

// Close project detail page
function closeProject() {
    const detailPage = document.getElementById('projectDetailPage');
    const mainContainer = document.getElementById('mainContainer');
    
    detailPage.classList.remove('active');
    mainContainer.style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Slideshow functions
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Handle window resize for matrix canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});