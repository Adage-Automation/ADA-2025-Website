// Mouse gradient effect
const mouseGradient = document.getElementById('mouseGradient');
let mouseX = 0;
let mouseY = 0;
let gradientX = 0;
let gradientY = 0;

// Thunder icon attraction
const thunderIcon = document.querySelector('.logo-icon');
let iconOffsetX = 0;
let iconOffsetY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Thunder icon attraction logic
    const iconRect = thunderIcon.getBoundingClientRect();
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const iconCenterY = iconRect.top + iconRect.height / 2;
    const distance = Math.sqrt((mouseX - iconCenterX) ** 2 + (mouseY - iconCenterY) ** 2);
    
    if (distance < 150) {
        iconOffsetX += (mouseX - iconCenterX) * 0.1;
        iconOffsetY += (mouseY - iconCenterY) * 0.1;
        
        // Limit the offset to prevent excessive movement
        iconOffsetX = Math.max(-50, Math.min(50, iconOffsetX));
        iconOffsetY = Math.max(-50, Math.min(50, iconOffsetY));
    } else {
        iconOffsetX *= 0.95;
        iconOffsetY *= 0.95;
    }
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
    
    // Animate thunder icon
    thunderIcon.style.transform = `translate(${iconOffsetX}px, ${iconOffsetY}px)`;
    
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
                title: 'Impact and Adoption',
                content: '100% quotations from Adage Regional Sales are routed through Odoo'
            }
        ]
    },
    'sales-crm': {
        title: 'CRM Management for Sales Team',
        subtitle: 'Customer relationship module to record leads, follow-ups, and interactions for regional sales and exhibitors.',
        sections: [
            {
                title: 'Overview',
                content: 'The CRM software was introduced specifically for the regional sales team to capture potential orders and enquiries instantly during customer visits or exhibitions, ensuring no interaction is forgotten. It enables quick logging of customer details, follow-up notes, and scheduled reminders, allowing sales reps to reconnect later and probe for specific requirements without relying on memory or scattered notes. This integration with the sales module lets any team member search for customers, view interaction history, and directly link them to existing quotations for seamless tracking and conversion.'
            },
            // {
            //     title: 'Product Gallery',
            //     type: 'gallery',
            //     images: [
            //         { src: '', alt: 'CRM Dashboard' },
            //         { src: 'https://via.placeholder.com/600x400?text=Sales+Pipeline', alt: 'Sales Pipeline' },
            //         { src: 'https://via.placeholder.com/600x400?text=Customer+Insights', alt: 'Customer Insights' }
            //     ]
            // },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025\\CRM Module for Sales\\Creating New Records on CRM Module.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'Regional Sales Team' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Regional Sales yet to Adopt it fully'
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
                title: 'Impact and Adoption',
                content: 'CSD has achieved 45% faster quote generation, 25% improvement in contract renewal rates, and significantly enhanced customer retention through better service tracking and proactive engagement.'
            }
        ]
    },
    'service-rfq': {
        title: 'Service Engineers RFQ Portal',
        subtitle: 'Portal for service engineers to raise, track, and manage RFQs for spare parts and services.',
        sections: [
            {
                title: 'Overview',
                content: 'The RFQ Portal for Service Engineers provides a dedicated web form accessible via login on the adage-automation.in portal, allowing engineers to submit RFQ details instantly from mobile devices anywhere. Entries sync directly to the sales module, triggering notifications to the CSD Team at head office while offering engineers a clean dashboard to track submission status and completion rates. This replaces manual email checks and data entry for CSD, enabling faster quote generation, better monitoring of pending requests, and reduced turnaround times overall.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/Service RFQ Portal/RFQ Form.png', alt: 'RFQ Portal Interface' },
                    { src: 'ADA Projects 2025/Service RFQ Portal/RFQ Dashboard.png', alt: 'RFQ Dashboard' },
                    { src: 'ADA Projects 2025/Service RFQ Portal/Editing an existing RFQ.png', alt: 'Editing Existing RFQ through the portal' }
                ]
            },
            // {
            //     title: 'Product Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🛠️', name: 'Service Engineers' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Being Utilized - 62 number of RFQs from Field'
            }
        ]
    },
    'safety': {
        title: 'Safety Meetings Module for Shopfloor',
        subtitle: 'Custom module to record and review shopfloor safety meetings for various units across India',
        sections: [
            {
                title: 'Overview',
                content: 'The Safety Meetings module is a custom Odoo module developed from scratch to automate the generation of mandatory reports required for factory inspections and internal audits, ensuring compliance without manual compilation. It supports shopfloor teams in discussing daily safety measures, personal precautions, and day plans, while capturing requests for requirements and recording all details in a structured format. The module produces digitally signed reports shared via email to designated recipients, replacing paper-based processes with a fully traceable, auditable digital workflow.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/Safety Meetings/Digital Signature Interface.png', alt: 'Digital Signature Interface' },
                    { src: 'ADA Projects 2025/Safety Meetings/Interface.png', alt: 'Safety Meetings Form' },
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Safety Meetings/Sample Report.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🔧', name: 'Shopfloor' },
                    { icon: '🏭', name: 'Plant Sites' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Being utilized daily by Unit 1 & Unit 2 Shopfloors. Launched in plant sites'
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
                title: 'Impact and Adoption',
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
                title: 'Impact and Adoption',
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
                title: 'Impact and Adoption',
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
                title: 'Impact and Adoption',
                content: 'We anticipate reducing item search time by 70%, decreasing incorrect item selections by 85%, and significantly improving user satisfaction with SAP interactions.'
            }
        ]
    },
    'newsletter': {
        title: 'Adage Connect Newsletter',
        subtitle: 'Distribute the monthly Adage Connect newsletter to all employees using Email Marketing module.',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage Connect Newsletter initiative, launched in September 2024, delivers monthly updates on the top 5 major activities and company news to keep employees and stakeholders informed.\n\nLeveraging Odoo\'s Email Marketing module, the team has successfully published over 15 editions with strong response rates, ensuring consistent communication about key events and developments.\n\nThis automated, visually appealing format replaced sporadic announcements with a reliable monthly touchpoint, boosting engagement and company-wide awareness directlly to the email inbox.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Adage Montly Newsletter\\Email Marketing Interface.png', alt: 'Email Marketing Interface' },
                    { src: 'ADA Projects 2025\\Adage Montly Newsletter\\How it looks in the inbox.png', alt: 'Email Inbox View' },
                    { src: 'ADA Projects 2025\\Adage Montly Newsletter\\Detailed Reporting of the Emails send.png', alt: 'Detailed Reporting of the Emails send' }
                ]
            },
            // {
            //     title: 'Product Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👥', name: 'Everyone' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Sent out 15 number of newsletters so far'
            }
        ]
    },
    'adage-day-app': {
        title: 'Adage Day 2025 Webapp',
        subtitle: 'Event web application giving participants schedules, information, and interactive features for Adage Day 2025.',
        sections: [
            {
                title: 'Overview',
                content: 'The Adage Day 2025 application was built from scratch using HTML, CSS, and JavaScript, hosted on Netlify for seamless access as a web app from any browser.\n\nIt serves as a comprehensive, 24/7 hub delivering real-time updates on team positions, event schedules, and essential details accessible to anyone from anywhere.\n\nThis one-stop solution eliminated fragmented communications, providing instant, reliable event information and enhancing participant engagement throughout Adage Day 2025.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Main Landing Page.jpeg', alt: 'Main Landing Page' },
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Winners Dashboard.jpeg', alt: 'Winners Dashboard' },
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Schedule Page.jpeg', alt: 'Schedule Page' },
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Contact Page.jpeg', alt: 'Contact Page' },
                    { src: 'ADA Projects 2025\\Adage Day Web App\\Guidelines Page.jpeg', alt: 'Guidelines Page' }
                ]
            },
            {
                title: 'Product Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Adage Day Web App/Adage App.webm" type="video/webm"></video>'
            },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Everyone' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utilized for Adage Day 2025'
            }
        ]
    },
    'frontdesk': {
        title: 'Frontdesk Application for<br>AKAI/AKIC in Odoo',
        subtitle: 'Front office app for reception team to log visitors, manage appointments, and route visit requests.',
        sections: [
            {
                title: 'Overview',
                content: 'The frontdesk software and kiosk was introduced to streamline visitor management at the company, capturing detailed purpose of visit, scheduling future appointments, and tracking entries and exits in real time.\n\nIt enables the reception team to log visitor details efficiently, receive alerts for upcoming visits, and maintain accurate records without manual notebooks or spreadsheets.\n\nThis replaced informal check-ins with a professional, searchable system that improves security, reduces wait times, and provides analytics on visitor patterns for AKAI/AKIC operations.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Frontdesk Module\\Frontdesk Interface.png', alt: 'Frontdesk Form View' },
                    { src: 'ADA Projects 2025\\Frontdesk Module\\Frontdesk Kiosk Starting Page.png', alt: 'Frontdesk Kiosk View' },
                    { src: 'ADA Projects 2025\\Frontdesk Module\\Frontdesk list view.png', alt: 'Frontdesk List View' }
                ]
            },
            // {
            //     title: 'Product Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '👨‍💼', name: 'Reception Team' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utlization started by AKAI'
            }
        ]
    },
    'interactive-screen': {
        title: 'Interactive Screen for Exhibitions',
        subtitle: 'Touch-enabled display software that showcases company products and information to exhibition visitors.',
        sections: [
            {
                title: 'Overview',
                content: 'The interactive screen software, deployed at over 15 exhibitions during the year, was built entirely using HTML, CSS, and JavaScript for offline, locally hosted operation.\n\nIt features an intuitive dashboard allowing visitors to independently explore product offerings and company solutions without internet access, ensuring fast loading and smooth navigation.\n\nThis approach replaced static brochures with engaging, self-guided product discovery, boosting visitor interaction and lead generation at trade shows.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Interactive Screen\\interactive screen adage.png', alt: 'Interactive Display Interface' },
                    { src: 'ADA Projects 2025\\Interactive Screen\\About Adage.png', alt: 'About Adage Page' },
                    { src: 'ADA Projects 2025\\Interactive Screen\\Cement Interface.png', alt: 'Sub Page of Cement Applications' },
                    { src: 'ADA Projects 2025\\Interactive Screen\\Oil n Gas Interface.png', alt: 'Sub Page of Oil & Gas Applications' },
                    { src: 'ADA Projects 2025\\Interactive Screen\\Inbuilt PPT Viewer.png', alt: 'Inbuilt PPT Viewer' }
                ]
            },
            {
                title: 'Product Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Interactive Screen/Industrial Application.webm" type="video/webm"></video>'
            },
            // {
            //     title: 'Product Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    // { icon: '🛠️', name: 'Service Managers' },
                    { icon: '🏟️', name: 'Exhibitors' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utilized for 15+ number of conferences & exhibitions this year'
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
                title: 'Impact and Adoption',
                content: 'Since launch, the website has generated 40% more qualified leads, reduced customer inquiry response time by 50%, and significantly enhanced our professional image in the market.'
            }
        ]
    },
    'project-mgmt': {
        title: 'Project Management for SBU Team',
        subtitle: 'Task and project tracking workspace for SBU 1 and SBU 2 design teams to monitor progress and deadlines.',
        sections: [
            {
                title: 'Overview',
                content: 'The project management software was implemented to enable efficient tracking of workloads, provide transparent progress visibility for each task, and ensure structured oversight of all projects. It structures the design team\'s workflow with defined stages, timelines, and accountability metrics, allowing teams to log hours accurately and monitor completion against planned durations. This rollout shifted operations from informal, scattered tracking to a disciplined system, guaranteeing on-time project delivery and better resource allocation across SBU 1 and SBU 2.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025\\Project Management\\Project Main Kanban View.png', alt: 'Kanban View of Projects' },
                    { src: 'ADA Projects 2025\\Project Management\\Project Tasks Kanban View.png', alt: 'Kanban view of tasks of each project' },
                    { src: 'ADA Projects 2025\\Project Management\\Automatic Reports of each project at a glance.png', alt: 'Reports of each project at a glance' }
                ]
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025\\Project Management\\Odoo Projects (Team) Guide.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'Design & Engineering Team' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Utlization started by SBU 1'
            }
        ]
    },
    'doc-mgmt': {
        title: 'Document Management for<br>Standardized Drawings',
        subtitle: 'Central repository for SBU 2 documents with controlled access and version tracking.',
        sections: [
            {
                title: 'Overview',
                content: 'The document management system integrates with inventory management to organize drawings and files for every physical part in the company. Previously, teams relied on Excel sheets with manual updates, limited access controls, and poor visibility into file locations or changes.\n\nThis was replaced by Odoo\'s version control features, private visibility settings, download analytics, and advanced filtering/grouping options for easy traceability of products.\n\nThe rollout eliminated scattered files, ensured only authorized access, tracked usage patterns, and enabled quick searches by part number or category, streamlining compliance and collaboration for SBU 2.'
            },
            {
                title: 'Product Video',
                type: 'video',
                content: '<video controls style="width: 100%; height: auto;"><source src="ADA Projects 2025/Document Management/Product Inventory Management.mp4" type="video/mp4"></video>'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'SBU 2 Team' },
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'All standardized drawings created by SBU2 tracked in Odoo'
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
                title: 'Impact and Adoption',
                content: 'Decision-making speed has improved by 50%, report preparation time reduced by 90%, and executives have gained unprecedented visibility into real-time business performance. Data-driven decision making has become the norm across the organization.'
            }
        ]
    },
    'field-service': {
        title: 'Field Service in Odoo',
        subtitle: 'User - friendly module for planning, dispatching, and reporting of service engineer field visits.',
        sections: [
            {
                title: 'Overview',
                content: 'The Field Service Management system is in progress and expected to launch by January 2026, enabling service engineers to record maintenance or commissioning visits with details on identified problems and solutions.\n\nThis creates a shared knowledge base, allowing new engineers to review past site-specific notes before visits, reducing repeat issues and improving efficiency.\n\nManagers gain a comprehensive dashboard view of engineer locations, timelines, and workloads, facilitating optimal task assignments and resource planning.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/Field Service Management/Form.png', alt: 'Form View' },
                    { src: 'ADA Projects 2025/Field Service Management/Gantt View.png', alt: 'Timesheet/ Gantt View' },
                    { src: 'ADA Projects 2025/Field Service Management/Worksheet.png', alt: 'Worksheet Form View' }
                ]
            },
            // {
            //     title: 'Product Documentation',
            //     type: 'pdf',
            //     url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
            // },
            {
                title: 'Utilized by',
                utilized: [
                    { icon: '🛠️', name: 'Service Engineers' },
                    { icon: '👨‍💼', name: 'Management' },
                    // { icon: '📋', name: 'Operations Team' },
                    // { icon: '💰', name: 'Finance Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'To be launched in Jan 2026'
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
                title: 'Impact and Adoption',
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
                title: 'Impact and Adoption',
                content: 'We expect to increase training accessibility by 90%, reduce onboarding time by 40%, improve employee engagement and retention through continuous learning opportunities, and provide better tracking of skill development across the organization.'
            }
        ]
    },
    'sap-odoo-sync': {
        title: 'SAP - Odoo Sync',
        subtitle: 'Automated data synchronization between SAP ERP and Odoo CRM platforms',
        sections: [
            {
                title: 'Overview',
                content: 'The SAP - Odoo Sync system provides seamless integration between SAP ERP and Odoo CRM platforms, enabling real-time data synchronization for customers, products, orders, and inventory. This eliminates manual data entry, reduces errors, and ensures data consistency across both systems.'
            },
            {
                title: 'Product Gallery',
                type: 'gallery',
                images: [
                    { src: 'ADA Projects 2025/SAP Odoo Sync/SAP-Odoo_Data_Synchronization_Flowchart.png', alt: 'SAP-Odoo_Data_Synchronization_Flowchart' },
                    { src: 'ADA Projects 2025/SAP Odoo Sync/SAP Data imported to Inventory module.png', alt: 'SAP Data imported to Inventory module' }
                ]
            },
            // {
            //     title: 'Product Documentation',
            //     type: 'pdf',
            //     url: 'ADA Projects 2025/SAP Odoo Sync/SAP_Odoo_Sync_Documentation.pdf'
            // },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '🏭', name: 'Operations Team' },
                    { icon: '💼', name: 'Sales Team' },
                    { icon: '📊', name: 'Finance Department' },
                    { icon: '🛠️', name: 'IT Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Expected to reduce data synchronization time by 95%, eliminate manual data entry errors, and provide real-time visibility across SAP and Odoo systems.'
            }
        ]
    },
    'employee-handbook': {
        title: 'Employee Handbook',
        subtitle: 'Comprehensive digital employee handbook with policies, procedures, and company guidelines',
        sections: [
            {
                title: 'Overview',
                content: 'The Employee Handbook is a comprehensive digital resource providing all employees with essential information about company policies, procedures, benefits, and guidelines. This interactive handbook ensures consistent communication and easy access to important HR information across the organization.'
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Employee Handbook/Employee_Handbook.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👥', name: 'All Employees' },
                    { icon: '👨‍💼', name: 'HR Department' },
                    { icon: '🏢', name: 'Management' },
                    { icon: '📚', name: 'New Hires' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Provides centralized access to company policies, improves compliance, reduces HR inquiries, and ensures all employees have up-to-date information on procedures and benefits.'
            }
        ]
    },
    'smart-quotation-acmg': {
        title: 'Smart Quotation Generation for ACMG',
        subtitle: 'AI-powered quotation generation system with intelligent pricing and customization',
        sections: [
            {
                title: 'Overview',
                content: 'The Smart Quotation Generation system leverages AI to automatically create customized quotations for the ACMG team. It analyzes product requirements, applies intelligent pricing algorithms, and generates professional quotes with minimal manual intervention, significantly reducing quote preparation time.'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'ACMG Team' },
                    { icon: '💼', name: 'Sales Managers' },
                    { icon: '📊', name: 'Pricing Department' },
                    { icon: '🤖', name: 'AI Systems' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Expected to reduce quotation generation time by 70%, improve pricing accuracy, and enable faster response to customer inquiries for the ACMG division.'
            }
        ]
    },
    'datasheet-pdf-quotations': {
        title: 'Datasheet creation from PDF for Quotations',
        subtitle: 'Automated extraction and formatting of product datasheets from PDF documents',
        sections: [
            {
                title: 'Overview',
                content: 'This system automatically extracts product specifications, technical details, and pricing information from PDF datasheets and formats them for seamless integration into quotation documents. It eliminates manual data entry and ensures accuracy in product information across all quotations.'
            },
            {
                title: 'Product Documentation',
                type: 'pdf',
                url: 'ADA Projects 2025/Datasheet creation from PDF for Quotations/Datasheet_Extraction_Documentation.pdf'
            },
            {
                title: 'Utilized By',
                utilized: [
                    { icon: '👨‍💼', name: 'Quotation Teams' },
                    { icon: '📄', name: 'Product Managers' },
                    { icon: '💼', name: 'Sales Operations' },
                    { icon: '🛠️', name: 'IT Department' }
                ]
            },
            {
                title: 'Impact and Adoption',
                content: 'Reduces manual data entry by 90%, ensures 100% accuracy in product specifications, and speeds up the quotation process significantly.'
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
        let impactIndex = project.sections.findIndex(s => s.title === 'Impact and Adoption');
        
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

        // Find gallery/pdf/video sections by type
        const gallerySection = project.sections.find(s => s && s.type === 'gallery');
        const pdfSection = project.sections.find(s => s && s.type === 'pdf');
        const videoSection = project.sections.find(s => s && s.type === 'video');

        // Render Video first if present
        if (videoSection) {
            html += `
                <div class="detail-section">
                    <h3>${videoSection.title}</h3>
                    <div>${videoSection.content}</div>
                </div>
            `;
        }

        // Render Gallery if present
        if (gallerySection) {
            html += `
                <div class="detail-section">
                    <h3>${gallerySection.title}</h3>
                    <div class="gallery-container" style="width: 100%; max-width: 1920px; height: auto; min-height: 600px; display: flex; flex-direction: column; margin: 0 auto;">
                        <div class="slideshow" style="flex: 1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
            `;
            gallerySection.images.forEach((img, index) => {
                html += `<img src="${img.src}" alt="${img.alt}" class="slide ${index === 0 ? 'active' : ''}" data-zoom="1" style="max-width:100%;max-height:100%;object-fit:contain;display:block;transition:transform 0.2s ease;transform-origin:center center;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(' + (this.dataset.zoom || 1) + ')'">`;
            });
            html += `
                        </div>
                        <div class="caption">${gallerySection.images[0].alt}</div>
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
        
        // Add wheel zoom and drag functionality to slideshow images
        const slideshow = detailPage.querySelector('.slideshow');
        if (slideshow) {
            let isDragging = false;
            let startX = 0, startY = 0;
            let translateX = 0, translateY = 0;
            
            slideshow.addEventListener('wheel', function(e) {
                const activeSlide = slideshow.querySelector('.slide.active');
                if (activeSlide) {
                    e.preventDefault();
                    let currentZoom = parseFloat(activeSlide.dataset.zoom) || 1;
                    const delta = e.deltaY < 0 ? 0.1 : -0.1;
                    currentZoom = Math.min(3, Math.max(1, currentZoom + delta));
                    activeSlide.dataset.zoom = currentZoom;
                    
                    // Reset translation when zoom is 1
                    if (currentZoom === 1) {
                        translateX = 0;
                        translateY = 0;
                        activeSlide.dataset.translateX = 0;
                        activeSlide.dataset.translateY = 0;
                        activeSlide.style.cursor = 'default';
                    } else {
                        activeSlide.style.cursor = 'grab';
                    }
                    
                    activeSlide.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
                }
            }, { passive: false });
            
            slideshow.addEventListener('mousedown', function(e) {
                const activeSlide = slideshow.querySelector('.slide.active');
                if (activeSlide && parseFloat(activeSlide.dataset.zoom) > 1) {
                    isDragging = true;
                    startX = e.clientX;
                    startY = e.clientY;
                    translateX = parseFloat(activeSlide.dataset.translateX) || 0;
                    translateY = parseFloat(activeSlide.dataset.translateY) || 0;
                    activeSlide.style.cursor = 'grabbing';
                    e.preventDefault();
                }
            });
            
            slideshow.addEventListener('mousemove', function(e) {
                if (isDragging) {
                    const activeSlide = slideshow.querySelector('.slide.active');
                    if (activeSlide) {
                        const deltaX = e.clientX - startX;
                        const deltaY = e.clientY - startY;
                        const newTranslateX = translateX + deltaX;
                        const newTranslateY = translateY + deltaY;
                        const currentZoom = parseFloat(activeSlide.dataset.zoom) || 1;
                        activeSlide.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px) scale(${currentZoom})`;
                    }
                }
            });
            
            slideshow.addEventListener('mouseup', function(e) {
                if (isDragging) {
                    const activeSlide = slideshow.querySelector('.slide.active');
                    if (activeSlide) {
                        const deltaX = e.clientX - startX;
                        const deltaY = e.clientY - startY;
                        translateX = translateX + deltaX;
                        translateY = translateY + deltaY;
                        activeSlide.dataset.translateX = translateX;
                        activeSlide.dataset.translateY = translateY;
                        activeSlide.style.cursor = 'grab';
                    }
                    isDragging = false;
                }
            });
            
            slideshow.addEventListener('mouseleave', function() {
                if (isDragging) {
                    const activeSlide = slideshow.querySelector('.slide.active');
                    if (activeSlide) {
                        activeSlide.style.cursor = 'grab';
                    }
                    isDragging = false;
                }
            });
        }
        
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
    
    // Update caption
    const caption = document.querySelector('.caption');
    if (caption) {
        caption.textContent = slides[currentSlide].alt;
    }
}

// Image viewer overlay for zoomable slides
let viewerScale = 1;

function ensureImageViewer() {
    let overlay = document.getElementById('imageViewerOverlay');
    if (overlay) {
        return overlay;
    }
    overlay = document.createElement('div');
    overlay.id = 'imageViewerOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);z-index:2000;padding:24px;';
    const frame = document.createElement('div');
    frame.style.cssText = 'position:relative;max-width:90vw;max-height:90vh;display:flex;align-items:center;justify-content:center;';
    const img = document.createElement('img');
    img.style.cssText = 'max-width:100%;max-height:100%;transform-origin:center center;transition:transform 0.1s ease-out;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,0.45);';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Close image');
    closeBtn.style.cssText = 'position:absolute;top:-12px;right:-12px;width:32px;height:32px;border:none;border-radius:50%;background:#111;color:#fff;font-size:16px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.35);';
    closeBtn.addEventListener('click', hideImageViewer);
    frame.appendChild(img);
    frame.appendChild(closeBtn);
    overlay.appendChild(frame);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideImageViewer();
        }
    });
    overlay.addEventListener('wheel', (e) => {
        if (overlay.style.display !== 'flex') return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.15 : -0.15;
        viewerScale = Math.min(4, Math.max(1, viewerScale + delta));
        img.style.transform = `scale(${viewerScale})`;
    }, { passive: false });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            hideImageViewer();
        }
    });
    document.body.appendChild(overlay);
    return overlay;
}

function showImageInViewer(src, alt) {
    const overlay = ensureImageViewer();
    const img = overlay.querySelector('img');
    viewerScale = 1;
    img.src = src;
    img.alt = alt || '';
    img.style.transform = 'scale(1)';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideImageViewer() {
    const overlay = ensureImageViewer();
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

function attachImageViewerHandlers(root = document) {
    const images = root.querySelectorAll('img.slide');
    images.forEach((img) => {
        if (img.dataset.viewerBound === '1') return;
        img.dataset.viewerBound = '1';
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => showImageInViewer(img.src, img.alt));
    });
}

// Bind to any slides already on the page (if present)
attachImageViewerHandlers();

// Handle window resize for matrix canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});